import axios from "axios";
import Cookies from 'js-cookie';

// Definir la interfaz para un perfil de usuario
interface UserProfile {
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

// Definir la interfaz para una user
interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    profile: UserProfile;
}

export const updateUserProfile = async (userId: string, updatedProfile: UserProfile): Promise<User> => {
    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;
    const backendUrlKey = process.env.NEXT_PUBLIC_X_API_KEY;

    if (!backendUrl) {
        throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
    }
    if (!backendUrlKey) {
        throw new Error("NEXT_PUBLIC_X_API_KEY no está definida");
    }

    //console.log("URL_BACKEND",backendUrl);
    //console.log("X_API_KEY",backendUrlKey);
    try {
        const token = Cookies.get('token');

        console.log("Actualizando perfil del usuario", userId, updatedProfile);

        // Hacer la solicitud PATCH para actualizar el perfil
        const response = await axios({
            method: 'PATCH',  // Se utiliza PATCH para actualizaciones parciales
            url: `${backendUrl}/api/user/profile/${userId}`,  // Asegúrate de que la URL sea correcta
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': backendUrlKey,
                'Authorization': `Bearer ${token}`,  // Asegúrate de que el token sea válido
            },
            data: updatedProfile,  // El cuerpo de la solicitud contiene el perfil actualizado
        });

        console.log('Respuesta:', response.data);

        return response.data;  // El perfil actualizado se encuentra en response.data
    } catch (error) {
        console.error("Error al actualizar el perfil del usuario", error);
        throw error;  // Lanza el error para que pueda ser manejado en el lugar donde se llame a la función
    }
};
