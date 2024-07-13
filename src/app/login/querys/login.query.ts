import axios from "axios";

export const queryLogin = async ({email, password}: {email: string, password: string}) => {

    const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND;

  if (!backendUrl) {
    throw new Error("NEXT_PUBLIC_URL_BACKEND no está definida");
  }

  console.log(`Backend URL: ${backendUrl}`); // Verificación
    try {
        const response = await axios.post(`https://argosapi-production.up.railway.app/login`, {
            email,
            password
        },
        {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "e16d5b497563265f80ce3e6f0a2bcf6bfe0230795a05240249409f8d5cc90fce0718abc31e047b558c23845129fd186a736c9aa8a73cb987290839b4aa38e765",
            },
        }
    
    
    );

        console.log(response.data);
        return response.data;

    } catch (error) {
        alert('Error al iniciar sesión');
        console.error(error);
    }

}
