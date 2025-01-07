import axios from "axios";
import Cookies from 'js-cookie';


// Definir la interfaz para una user
interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    profile: {
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
    };
  }
  

  export const fetchAllUsers = async (): Promise<User[]> => {
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
  
      const response = await axios.put(`${backendUrl}/profile`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": backendUrlKey,
          "Authorization": `Bearer ${token}`, 
        },
      });
      
    
      //console.log("Respuesta completa de la API:", response.data);
  
      return response.data;
    } catch (error) {
      console.error("Error al obtener las multas", error);
      throw error;
    }
  };