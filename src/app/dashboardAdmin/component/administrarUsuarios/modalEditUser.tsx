import React, { useState } from 'react';
import { updateUserProfile } from '../../queryProfile/updateProfile.query';

interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    avatarUrl: string;
    bio: string;
    dateOfBirth: string;
    education: string;
    employment: string;
    gender: string;
    interests: string;
    socialMediaLinks: string;
}

interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    profile: UserProfile;
}

interface ModalEditUserProps {
    user: User;
    onClose: () => void;
    onSave: (updatedUser: User) => void;
}

// Formatea la fecha al formato aceptado por input date
const formatDateToInput = (date: string): string => {
    if (!date) return '';
    const d = new Date(date);
    return isNaN(d.getTime()) ? '' : d.toISOString().split('T')[0]; // Devuelve solo la parte de la fecha (YYYY-MM-DD)
};

// Convierte el input date al formato ISO
const formatDateToISO = (date: string): string => {
    if (!date) return ''; 

    // Verifica si la fecha ya está en formato ISO
    const isISO = date.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
    if (isISO) return date; // Si ya está en formato ISO, retorna la fecha tal cual

    // Si no está en formato ISO, realiza la conversión
    const [year, month, day] = date.split('-');
    if (!year || !month || !day) return ''; 
    return `${year}-${month}-${day}T00:00:00.000Z`; // Formato correcto de fecha
};

const ModalEditUser: React.FC<ModalEditUserProps> = ({ user, onClose, onSave }) => {
    const [updatedUser, setUpdatedUser] = useState<User>(user);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
    
        // Si el campo es de tipo 'date', formatea la fecha de vuelta a ISO
        if (name === 'profile.dateOfBirth' && value) {
            // Convertimos la fecha de 'YYYY-MM-DD' a formato ISO
            const isoDate = formatDateToISO(value);
            setUpdatedUser((prev) => ({
                ...prev,
                profile: {
                    ...prev.profile,
                    dateOfBirth: isoDate, // Actualizamos la fecha con el formato ISO
                },
            }));
        } else {
            setUpdatedUser((prev) => {
                const keys = name.split('.');
                if (keys.length === 2) {
                    return {
                        ...prev,
                        [keys[0]]: {
                            ...(prev as any)[keys[0]],
                            [keys[1]]: value,
                        },
                    };
                }
                return { ...prev, [name]: value };
            });
        }
    };

    const handleSave = () => {
        setShowConfirmation(true);
    };

    const handleConfirmSave = async (confirmed: boolean) => {
        if (confirmed) {
            setLoading(true);
            setError(null);

            try {
                console.log("dateOfBirth antes de guardar:", updatedUser.profile.dateOfBirth);
                const userToSave = {
                    ...updatedUser,
                    profile: {
                        ...updatedUser.profile,
                        dateOfBirth: formatDateToISO(updatedUser.profile.dateOfBirth), // Solo convertir aquí cuando se guarda
                    },
                    
                };
                console.log("dateOfBirth después de la conversión a ISO:", userToSave.profile.dateOfBirth); // Muestra el valor de la fecha después de la conversión

                await updateUserProfile(updatedUser.id, userToSave.profile);
                onSave(userToSave);
                onClose();
            } catch (error) {
                setError('Error al guardar los datos. Intente nuevamente.');
            } finally {
                setLoading(false);
                setShowConfirmation(false);
            }
        } else {
            setShowConfirmation(false);
        }
    };
     //console.log("dateOfBirth en modal", updatedUser.profile.dateOfBirth);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full overflow-auto max-h-[90vh] relative">
                <h2 className="text-xl font-semibold mb-4">Editar Usuario</h2>

                {loading && <div className="text-center">⏳ Guardando cambios...</div>}
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                {showConfirmation ? (
                    <div className="flex flex-col items-center">
                        <p className="mb-4">¿Estás seguro de que deseas guardar los cambios?</p>
                        <div className="flex gap-4">
                            <button className="btn btn-primary" onClick={() => handleConfirmSave(true)}>Sí</button>
                            <button className="btn btn-secondary" onClick={() => handleConfirmSave(false)}>No</button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={(e) => e.preventDefault()}>
                        {[
                            { label: 'Nombre', name: 'profile.firstName', type: 'text' },
                            { label: 'Apellido', name: 'profile.lastName', type: 'text' },
                            { label: 'Edad', name: 'profile.age', type: 'number' },
                            { label: 'Teléfono', name: 'profile.phone', type: 'text' },
                            { label: 'Dirección', name: 'profile.address', type: 'text' },
                            { label: 'Ciudad', name: 'profile.city', type: 'text' },
                            { label: 'País', name: 'profile.country', type: 'text' },
                            { label: 'Código Postal', name: 'profile.postalCode', type: 'text' },
                            { label: 'Fecha de Nacimiento', name: 'profile.dateOfBirth', type: 'date' },
                            { label: 'Formación', name: 'profile.education', type: 'text' },
                            { label: 'Empleo', name: 'profile.employment', type: 'text' },
                            { label: 'Intereses', name: 'profile.interests', type: 'text' },
                        ].map(({ label, name, type }) => (
                            <label key={name} className="block mb-2">
                                {label}:
                                <input
                                    type={type}
                                    name={name}
                                    value={
                                        name === 'profile.dateOfBirth'
                                            ? formatDateToInput(updatedUser.profile.dateOfBirth)
                                            : (updatedUser as any)[name.split('.')[0]][name.split('.')[1]]
                                    }
                                    onChange={handleChange}
                                    className="border p-2 mb-4 w-full"
                                />
                            </label>
                        ))}

                        <div className="flex justify-between mt-4">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ModalEditUser;

