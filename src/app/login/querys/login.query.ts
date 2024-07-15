import axios from "axios";
import {configVariable as confVar} from "../../../config/config";
import { userStore } from "../../../../src/store/user.store";
import { authStore } from "../../../../src/store/auth.store";
import Cookies from 'js-cookie';

export const queryLogin = async ({email, password}: {email: string, password: string}) => {

    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;

  if (!backendUrl) {
    throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
  }

  console.log(`Backend URL: ${backendUrl}`); // Verificación
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
        
        const { setIsLogged } = userStore.getState();
        const { setToken } = authStore.getState();

        setIsLogged(true);
        setToken(response.data.token);
        Cookies.set('isLogged', 'true'); // Set cookie
        Cookies.set('token', response.data.token); // Set cookie
        return response.data;
        
    } catch (error) {
        alert('Error al iniciar sesión');
        console.error(error);
    }

}
