import { create } from 'zustand';

interface UserStore {
    isLogged: boolean;
    setIsLogged: (value:boolean) => void;
}

export const userStore = create<UserStore>((set) => ({
    isLogged: false,
    setIsLogged: (value) => {
        set(() => ({isLogged: value}));
    },
}));
