import axios from "axios";
import Cookies from 'js-cookie';
import { configVariable as confVar } from "../../../config/config";


// Definir la interfaz para una multa
interface Multa {
    plateNumber: string;
    driverName: string;
    photoUrl: string;
    date: string;
    confirm: boolean;
}

export const fetchMultas = async (): Promise<Multa[]> => {
    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;
    const backendUrlKey = process.env.NEXT_PUBLIC_X_API_KEY;

    if (!backendUrl) {
        throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
    }
    if (!backendUrlKey) {
        throw new Error("NEXT_PUBLIC_X_API_KEY no está definida");
    }

    try {
        const token = Cookies.get('token'); // Obtén el token desde las cookies o almacenamiento seguro

        const response = await axios.get(`${backendUrl}/api/ticket`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": backendUrlKey,
                "Authorization": `Bearer ${token}`, // Agregar el token de autenticación
            },
        });

        return response.data; // Asegúrate de que response.data sea un array de Multa
    } catch (error) {
        console.error("Error al obtener las multas", error);
        throw error;
    }
};
