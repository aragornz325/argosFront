    import React, { useState } from 'react';
    import { updateUserProfile } from '../../queryProfile/updateProfile.query';

    interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    profile: {
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
    };
    }

    interface ModalEditUserProps {
    user: User;  // Recibe el objeto completo de usuario
    onClose: () => void;
    onSave: (updatedUser: User) => void;
    }

    const formatDateToInput = (date: string): string => {
        const d = new Date(date);
        const day = String(d.getUTCDate()).padStart(2, '0');
        const month = String(d.getUTCMonth() + 1).padStart(2, '0');
        const year = d.getUTCFullYear();
        return `${day}/${month}/${year}`;
    };
    
    const formatDateToISO = (date: string): string => {
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}T00:00:00.000Z`;
    };

    const ModalEditUser: React.FC<ModalEditUserProps> = ({ user, onClose, onSave }) => {
    const [updatedUser, setUpdatedUser] = useState<User>(user);  // Inicializa con el usuario pasado desde UserAdmin
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);  // Controla la confirmación de guardado

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => {
            if (name === 'profile.dateOfBirth') {
                return {
                    ...prev,
                    profile: {
                        ...prev.profile,
                        dateOfBirth: value
                    }
                };
            }
            const [parent, key] = name.split('.');
            return {
                ...prev,
                [parent]: {
                    ...(prev as any)[parent],
                    [key]: value
                }
            };
        });
    };

    const handleSave = () => {
        setShowConfirmation(true); // Muestra el cuadro de confirmación
    };

    const handleConfirmSave = async (confirmed: boolean) => {
        if (confirmed) {
            setLoading(true);

            // Formatea la fecha de nacimiento antes de guardar
            const userToSave = {
                ...updatedUser,
                profile: {
                    ...updatedUser.profile,
                    dateOfBirth: formatDateToISO(updatedUser.profile.dateOfBirth),
                },
            };

            try {
                const updatedUserData = await updateUserProfile(updatedUser.id, userToSave.profile);
                onSave(updatedUserData); // Actualiza el estado en UserAdmin
                onClose(); // Cierra el modal
            } catch (error) {
                setError('Error al guardar los datos');
            } finally {
                setLoading(false);
            }
        }
        setShowConfirmation(false); // Cierra el cuadro de confirmación
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md overflow-auto max-h-[90vh] relative">
        {/*<span className="close absolute top-2 right-2 text-xl font-bold cursor-pointer" onClick={onClose}>&times;</span>*/}
            <h2>Editar Usuario</h2>

            {showConfirmation ? (
            <div className="flex justify-around mt-4">
                <p>¿Estás seguro de que deseas guardar los cambios?</p>
                <button className="btn" onClick={() => handleConfirmSave(true)}>Sí</button>
                <button className="btn" onClick={() => handleConfirmSave(false)}>No</button>
            </div>
            ) : (
            <form onSubmit={(e) => e.preventDefault()}>

                <label>
                Nombre:
                <input
                    type="text"
                    name="profile.firstName"
                    value={updatedUser.profile.firstName}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Apellido:
                <input
                    type="text"
                    name="profile.lastName"
                    value={updatedUser.profile.lastName}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Edad:
                <input
                    type="number"
                    name="profile.age"
                    value={updatedUser.profile.age}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Teléfono:
                <input
                    type="text"
                    name="profile.phone"
                    value={updatedUser.profile.phone}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Dirección:
                <input
                    type="text"
                    name="profile.address"
                    value={updatedUser.profile.address}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Ciudad:
                <input
                    type="text"
                    name="profile.city"
                    value={updatedUser.profile.city}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                País:
                <input
                    type="text"
                    name="profile.country"
                    value={updatedUser.profile.country}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Código postal:
                <input
                    type="text"
                    name="profile.postalCode"
                    value={updatedUser.profile.postalCode}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Fecha de nacimiento:
                <input
                    type="text"
                    name="profile.dateOfBirth"
                    value={formatDateToInput(updatedUser.profile.dateOfBirth)}
                    placeholder="dd/mm/yyyy"
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                 />
                </label>

                <label>
                Formación:
                <input
                    type="text"
                    name="profile.education"
                    value={updatedUser.profile.education}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                Empleo:
                <input
                    type="text"
                    name="profile.employment"
                    value={updatedUser.profile.employment}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full"
                />
                </label>

                <label>
                    Género:
                    <select
                        name="profile.gender"
                        value={updatedUser.profile.gender}
                        className="border p-2 mb-4 w-full"
                        onChange={handleChange}
                    >
                        <option value="">Seleccione</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </label>

                <div className="flex justify-between mt-4">
                <button type="button" className="btn" onClick={onClose}>Cerrar</button>
                <button type="button" className="btn" onClick={handleSave}>Guardar cambios</button>
                </div>
            </form>
            )}
        </div>
        </div>
    );
    };

    export default ModalEditUser;

