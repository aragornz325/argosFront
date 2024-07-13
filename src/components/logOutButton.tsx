'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();
    const logout = () => {
        Cookies.remove('isLogged');
        Cookies.remove('token');
        alert('Sesión cerrada');
        router.push('/login');
    };

    return (
        <button onClick={logout}>Cerrar sesión</button>
    );
};

