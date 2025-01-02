'use client'
import { useEffect, useState } from "react";
import '@/components/styleComponents/dark.style.css'
import Image from "next/image";

import sun from '../../public/sun.png'
import moon from '../../public/moon.png'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModePreference = localStorage.getItem('dark-mode');
        if (darkModePreference === 'enabled') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'enabled');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className=""
        >
            {isDarkMode ? (
                <Image src={sun} alt='sun' width={20} height={20} className="dark:invert"/> // darkMode ACTIVATE
            ) : (
                <Image src={moon} alt='moon' width={20} height={20} className="dark:invert" /> // darckMode DEACTIVATE
            )}
        </button>
    );
};

export default ThemeToggle;