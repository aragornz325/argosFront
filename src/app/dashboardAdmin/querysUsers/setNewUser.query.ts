import axios from "axios";
import Cookies from "js-cookie";

// Interfaz para el DTO del usuario
interface UserDTO {
    email: string;
    username: string;
    password: string;
    role:string
}

// Interfaz para la respuesta de crear usuario
interface CreateUserResponse {
    message: string;
    userId: string;
    id:string;
}

export const fetchCreateUser = async (user: UserDTO): Promise<CreateUserResponse> => {
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

        //console.log("datos de usuario",user)

        const response = await axios({
            method: "POST",
            url: `${backendUrl}/api/user`, // Endpoint de creación de usuario
            headers: {
                "Content-Type": "application/json",
                "x-api-key": backendUrlKey,
                Authorization: `Bearer ${token}`,
            },
            data: user,
        });

        console.log("🟢 Usuario creado:", response.data);
        return response.data as CreateUserResponse;
    } catch (error: any) {
        console.error("❌ Error al crear el usuario:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Error del servidor.");
        }
        throw error;
    }
};
