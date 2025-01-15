import axios from "axios";
import Cookies from "js-cookie";

export const fetchDeleteUser = async (userId: string): Promise<void> => {
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
        console.log("🚀 usuario para eliminar", userId);
        await axios({
            method: "DELETE",
            url: `${backendUrl}/api/user/${userId}`,
            headers: {
                "Content-Type": "application/json",
                "x-api-key": backendUrlKey,
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log("Respuesta del servidor:", response.data); // Registra la respuesta
        }).catch((error) => {
            console.error("Error al realizar la solicitud DELETE:", error.response?.data); // Registra errores
            throw new Error(error.response?.data?.message || "Error del servidor.");
        });

        console.log("🟢 Usuario eliminado con éxito");
    } catch (error: any) {
        console.error("❌ Error al eliminar el usuario:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Error del servidor.");
        }
        throw error;
    }
};
