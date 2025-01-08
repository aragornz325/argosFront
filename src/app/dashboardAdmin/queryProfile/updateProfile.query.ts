import axios from "axios";
import Cookies from 'js-cookie';

// Definir la interfaz para un perfil de usuario
interface UserProfile {
    id?: string; // Opcional
    createdAt?: string; // Opcional
    updatedAt?: string; // Opcional
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

// Definir la interfaz para un usuario
interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    profile: UserProfile;
}

// Función para actualizar el perfil de un usuario
export const updateUserProfile = async (userId: string, updatedProfile: UserProfile): Promise<User> => {
    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;
    const backendUrlKey = process.env.NEXT_PUBLIC_X_API_KEY;

    if (!backendUrl) {
        throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
    }
    if (!backendUrlKey) {
        throw new Error("NEXT_PUBLIC_X_API_KEY no está definida");
    }

    try {
        const token = Cookies.get('token');

        //console.log("🟢 Actualizando perfil del usuario:", userId);
        //console.log("🟢 Perfil actualizado recibido:", updatedProfile);

        // Desestructurar y eliminar propiedades no permitidas
        const { id, createdAt, updatedAt, ...profileToUpdate } = updatedProfile;

        //console.log("✅ Campos eliminados correctamente:");
        //console.log("id:", id);
        //console.log("createdAt:", createdAt);
        //console.log("updatedAt:", updatedAt);
        //console.log("🔄 Datos a enviar al backend:", profileToUpdate);
        //console.log("date of birth", profileToUpdate.dateOfBirth);

        // Hacer la solicitud PATCH para actualizar el perfil
        const response = await axios({
            method: 'PATCH',
            url: `${backendUrl}/api/user/profile`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': backendUrlKey,
                'Authorization': `Bearer ${token}`,
            },
            data: profileToUpdate, // Enviar solo los campos permitidos
        });

        console.log('🟢 Respuesta del servidor:', response.data);

        return response.data; // Devolver los datos actualizados
    } catch (error) {
        console.error("❌ Error al actualizar el perfil del usuario:", error);
        throw error; // Relanzar el error para manejarlo en otro lugar
    }
};
