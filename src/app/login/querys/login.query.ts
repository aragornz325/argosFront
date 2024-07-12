import axios from "axios";
import {configVariable as confVar} from "../../../config/config";

export const queryLogin = async ({email, password}: {email: string, password: string}) => {

    try {
        const response = await axios.post(
            `${confVar.backend.url}/auth/login`, 
            {
                email,
                password
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": confVar.backend.api_key,
                },
            }
        );

        
        alert('Inicio de sesión exitoso');
        return response.data;

    } catch (error) {
        alert('Error al iniciar sesión');
        console.error(error);
    }

}
