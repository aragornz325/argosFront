import axios from "axios";
import Cookies from "js-cookie";

// Interfaz para el DTO del perfil
interface ProfileDTO {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    city: string;
    country: string;
    postalCode: string;
    address: string;
    gender: "male" | "female";
    dateOfBirth: string; // Formato esperado: 'YYYY-MM-DD'
    avatarUrl: string;
    bio: string;
    education: string;
    employment: string;
    interests: string;
    socialMediaLinks: string;
}

// Interfaz para la respuesta del servidor
interface CreateProfileResponse {
    message: string;
    profileId: string;
}

export const fetchCreateProfile = async (
    profile: ProfileDTO,
    userId: string
): Promise<CreateProfileResponse> => {
    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;
    const backendUrlKey = process.env.NEXT_PUBLIC_X_API_KEY;

    if (!backendUrl) {
        throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
    }
    if (!backendUrlKey) {
        throw new Error("NEXT_PUBLIC_X_API_KEY no está definida");
    }

    try {
        const token = Cookies.get("token");
        if (!token) {
            throw new Error("Token no disponible, inicia sesión nuevamente.");
        }

        console.log("datos de perfil", profile);

        const response = await axios({
            method: "POST",
            url: `${backendUrl}/api/user/profile`, // Endpoint de creación del perfil
            headers: {
                "Content-Type": "application/json",
                "x-api-key": backendUrlKey,
                Authorization: `Bearer ${token}`,
            },
            data: profile,
        });

        console.log("🟢 Perfil creado:", response.data);
        return response.data as CreateProfileResponse;
    } catch (error: any) {
        console.error("❌ Error al crear el perfil:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Error del servidor.");
        }
        throw error;
    }
};
