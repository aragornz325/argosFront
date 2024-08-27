import axios from "axios";
import {configVariable as confVar} from "../../../config/config";
import { userStore } from "../../../../src/store/user.store";
import { authStore } from "../../../../src/store/auth.store";
import Cookies from 'js-cookie';

export const queryLogin = async ({email, password}: {email: string, password: string}) => {

    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;
    const backendUrlKey= process.env.NEXT_PUBLIC_X_API_KEY;

  if (!backendUrl) {
    throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
  }
  if(!backendUrlKey){
    throw new Error("NEXT_PUBLIC_X_API_KEY no esta definida");
  }

  //console.log(`Backend URL: ${backendUrl}`); // Verificación
  //console.log(`Backend URL: ${backendUrlKey}`);
    try {
        const response = await axios.post(
            `${confVar.backend.url}/api/auth/login`, 
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

        //console.log(response); // Verificación

        const { setIsLogged } = userStore.getState();
        const { setToken } = authStore.getState();
        
        setIsLogged(true);
        setToken(response.data.token);
        Cookies.set('isLogged', 'true'); // Set cookie
        Cookies.set('token', response.data.token); // Set cookie
        Cookies.set('name',response.data.user.profile.firstName); //devuelve sin nombre por que no esta en la db
        Cookies.set('mail',response.data.user.email);
        //console.log(response.data.user.profile.firstName);
        return response.data;
        
    } catch (error) {
        alert('Error al iniciar sesión');
        console.error(error);
        
    }

}
