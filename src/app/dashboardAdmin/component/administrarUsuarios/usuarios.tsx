'use client';
import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from "../../querysUsers/getUsers.querys";

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

const UserAdmin: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false); // Modal

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data: User[] = await fetchAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener usuarios", error);
      }
    };

    getAllUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white">Panel de administración de usuarios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {users ? (
          users.map((user) => (
            <div key={user.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={user.profile.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
                  alt={user.username}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{user.username}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Rol:</strong> {user.role}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedUser(user);
                      setShowModal(true);
                    }}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center loaderContainer">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
        )}
      </div>

      {/* Modal para mostrar detalles del usuario */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md overflow-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">{selectedUser.username}</h2>
            <img
              src={selectedUser.profile.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${selectedUser.username}`}
              alt={selectedUser.username}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p><strong>Nombre:</strong> {selectedUser.profile.firstName} {selectedUser.profile.lastName}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Rol:</strong> {selectedUser.role}</p>
            <p><strong>Edad:</strong> {selectedUser.profile.age}</p>
            <p><strong>Teléfono:</strong> {selectedUser.profile.phone}</p>
            <p><strong>Dirección:</strong> {selectedUser.profile.address}, {selectedUser.profile.city}, {selectedUser.profile.country} ({selectedUser.profile.postalCode})</p>
            <p><strong>Biografía:</strong> {selectedUser.profile.bio || 'No disponible'}</p>
            <p><strong>Género:</strong> {selectedUser.profile.gender}</p>
            <p><strong>Fecha de Nacimiento:</strong> {new Date(selectedUser.profile.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Educación:</strong> {selectedUser.profile.education || 'No disponible'}</p>
            <p><strong>Trabajo:</strong> {selectedUser.profile.employment || 'No disponible'}</p>
            <p><strong>Intereses:</strong> {selectedUser.profile.interests || 'No disponible'}</p>
            <p><strong>Redes Sociales:</strong> {selectedUser.profile.socialMediaLinks || 'No disponible'}</p>
            <div className="text-right mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAdmin;

