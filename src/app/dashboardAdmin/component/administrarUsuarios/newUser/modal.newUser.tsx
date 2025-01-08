// ModalNewUser.tsx
import React, { useState } from 'react';
import { fetchCreateNewUser } from '@/app/dashboardAdmin/querysUsers/setNewUser.query';

interface NewUser {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    city: string;
    country: string;
    postalCode: string;
    address: string;
    gender: 'male' | 'female';
    dateOfBirth: string;
}

const ModalNewUser: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<NewUser>({
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
    });
    const [loading, setLoading] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'age' ? Number(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await fetchCreateNewUser(formData);
            if (response) {
                alert('Usuario creado exitosamente');
                toggleModal();
                setFormData({
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
                });
            }
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            alert('Hubo un error al crear el usuario. Intente nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={toggleModal}
            >
                New User
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl mb-4">Nuevo Usuario</h2>
                        <form onSubmit={handleSubmit}>
                            {Object.entries(formData).map(([key, value]) => (
                                <div key={key} className="mb-4">
                                    <label className="block text-gray-700 capitalize">{key}</label>
                                    {key === 'gender' ? (
                                        <select
                                            name={key}
                                            value={value}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border rounded"
                                            required
                                        >
                                            <option value="male">Masculino</option>
                                            <option value="female">Femenino</option>
                                        </select>
                                    ) : (
                                        <input
                                            type={key === 'age' ? 'number' : key === 'dateOfBirth' ? 'date' : 'text'}
                                            name={key}
                                            value={value}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border rounded"
                                            required
                                        />
                                    )}
                                </div>
                            ))}

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={toggleModal}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    disabled={loading}
                                >
                                    {loading ? 'Enviando...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalNewUser;
