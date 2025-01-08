// setNewUser.query.ts
import axios from "axios";
import Cookies from 'js-cookie';

// Definir la interfaz para un perfil de usuario
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
    dateOfBirth: string; // Formato esperado: 'YYYY-MM-DD'
}

// Interfaz para la respuesta del servidor
interface CreateUserResponse {
    message: string;
    userId: string;
}

// Función para crear nuevo usuario
export const fetchCreateNewUser = async (newUser: NewUser): Promise<CreateUserResponse> => {
    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;
    const backendUrlKey = process.env.NEXT_PUBLIC_X_API_KEY;

    if (!backendUrl) {
        throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
    }
    if (!backendUrlKey) {
        throw new Error("NEXT_PUBLIC_X_API_KEY no está definida");
    }

    console.log("🟢 Creando nuevo usuario:", newUser);
    try {
        const token = Cookies.get('token');

        const response = await axios({
            method: 'POST',
            url: `${backendUrl}api/user/profile`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': backendUrlKey,
                'Authorization': `Bearer ${token}`,
            },
            data: newUser
        });

        console.log('🟢 Respuesta del servidor:', response.data);
        return response.data; // Asegúrate de que el backend devuelve un objeto con los datos esperados.
    } catch (error) {
        console.error("❌ Error al crear el perfil de usuario:", error);
        throw error;
    }
};
