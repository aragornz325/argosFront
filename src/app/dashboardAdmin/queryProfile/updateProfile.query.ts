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

    try {
        const token = Cookies.get('token');

        console.log("Actualizando perfil del usuario", userId, updatedProfile);

        // Hacer la solicitud PATCH
        const response = await axios({
            method: 'PATCH',  // Asegúrate de que sea PATCH
            url: `${backendUrl}/api/user/profile/${userId}`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': backendUrlKey,
                'Authorization': `Bearer ${token}`,
            },
            data: updatedProfile,
        });
        console.log('Respuesta:', response.data);

        return response.data;
    } catch (error) {
        /*if(axios.isAxiosError(error))
        {
            console.error('Error de Axios:', error.response?.data);
            console.error('Código de estado:', error.response?.status); 
            console.error('Encabezados:', error.response?.headers);
            console.error('Mensaje de error:', error.message);
        }*/
        console.error("Error al actualizar el perfil del usuario", error);
        throw error;
    }
};