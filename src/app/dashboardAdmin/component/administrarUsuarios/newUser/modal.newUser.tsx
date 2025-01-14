import React, { useState } from 'react';
import { fetchCreateUser } from '@/app/dashboardAdmin/querysUsers/setNewUser.query';
import { fetchCreateProfile } from '@/app/dashboardAdmin/queryProfile/newProfile.query';

interface UserDTO {
    email: string;
    username: string;
    password: string;
    role:string
}

interface ProfileDTO {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    city: string;
    country: string;
    postalCode: string;
    address: string;
    gender: 'male' | 'female';
    dateOfBirth: string; // Formato esperado: 'YYYY-MM-DD'
    avatarUrl: string;
    bio: string;
    education: string;
    employment: string;
    interests: string;
    socialMediaLinks: string;
}

const ModalNewUser: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState<UserDTO>({
        email: '',
        username: '',
        password: '',
        role:'BASIC'
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileData, setProfileData] = useState<ProfileDTO>({
        firstName: '',
        lastName: '',
        age: 0,
        phone: '',
        city: '',
        country: '',
        postalCode: '',
        address: '',
        gender: 'male',
        dateOfBirth: '',
        avatarUrl: '',
        bio: '',
        education: '',
        employment: '',
        interests: '',
        socialMediaLinks: '',
    });
    const [loading, setLoading] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: name === 'age' ? Number(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userData.password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        try {
            setLoading(true);
            
            // Enviar los datos del usuario (UserDTO)
            console.log("user data:",userData);
            const userResponse = await fetchCreateUser(userData);
            if (!userResponse) {
                throw new Error('Error al crear el usuario');
            }
            
            console.log("profileResponse user id:",userResponse.id);
            // Enviar los datos del perfil (ProfileDTO) con el `userId` del usuario creado
            //const profileResponse = await fetchCreateProfile(profileData, userResponse.id);
            
            /*
            if (!profileResponse) {
                throw new Error('Error al crear el perfil');
            }*/ 

            alert('Usuario y perfil creados exitosamente');
            toggleModal(); // Cerrar el modal después de éxito
        } catch (error: any) {
            alert('Hubo un error al crear el usuario y perfil: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    // Cerrar modal si se hace clic fuera de él
    const closeModalOnOutsideClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
            toggleModal();
        }
    };

    return (
        <>
            <button onClick={toggleModal} className="bg-blue-500 text-white p-2 rounded">
                Crear Usuario
            </button>
            {isOpen && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
                    onClick={closeModalOnOutsideClick}
                >
                    <div className="bg-white p-6 rounded w-full max-w-3xl max-h-screen overflow-y-auto">
                        
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <h2 className="col-span-2 text-lg font-bold">Datos del Usuario</h2>
                        
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={userData.username}
                            onChange={handleUserChange}
                            className="p-2 border rounded"
                            required
                        />
                        
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={userData.password}
                            onChange={handleUserChange}
                            className="p-2 border rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={userData.email}
                            onChange={handleUserChange}
                            className="p-2 border rounded"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirmar Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className="p-2 border rounded"
                            required
                        />
                        
                        <select
                            name="role"
                            value={userData.role}
                            onChange={handleUserChange}
                            className="p-2 border rounded"
                        >
                            <option value="ADMIN">Administrador</option>
                            <option value="BASIC">Basico</option>
                        </select>
                        
                        {/* 
                        <h2 className="col-span-2 text-lg font-bold">Datos del Perfil</h2>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Nombre"
                            value={profileData.firstName}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={profileData.lastName}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                            required
                        />
                        <div className='flex flex-col'>
                            Edad :  
                        <input
                            type="number"
                            name="age"
                            placeholder="Edad"
                            value={profileData.age}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                            required
                        />
                        </div>
                        
                        <select
                            name="gender"
                            value={profileData.gender}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        >
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                        </select>

                        <input
                            type="text"
                            name="country"
                            placeholder="País"
                            value={profileData.country}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />

                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Código Postal"
                            value={profileData.postalCode}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección completa"
                            value={profileData.address}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />

                        <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Fecha de Nacimiento"
                            value={profileData.dateOfBirth}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />

                        <input
                            type="text"
                            name="avatarUrl"
                            placeholder="URL de Avatar"
                            value={profileData.avatarUrl}
                            onChange={handleProfileChange}
                            className="p-2 border rounded" 
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Teléfono"
                            value={profileData.phone}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="Ciudad"
                            value={profileData.city}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="bio"
                            placeholder="Biografía"
                            value={profileData.bio}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />

                        <input
                            type="text"
                            name="education"
                            placeholder="Educación"
                            value={profileData.education}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />

                        <input
                            type="text"
                            name="employment"
                            placeholder="Empleo"
                            value={profileData.employment}
                            onChange={handleProfileChange}
                            className="p-2 border rounded"
                        />
                             */}
                        {/* Botones alineados a la derecha en la columna derecha */}
                        <div></div> {/* Espacio vacío en la columna izquierda */}
                        <div className="flex justify-end gap-2"> {/* Columna derecha con botones alineados */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                {loading ? 'Creando...' : 'Crear Usuario'}
                            </button>
                            <button
                                onClick={toggleModal}
                                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>

                    </div>
                </div>
            )}
        </>
    );
};

export default ModalNewUser;
