import { create } from 'zustand';

interface AuthStore {
    token: string | null;
    setToken: (value:string) => void;
}

export const authStore = create<AuthStore>((set) => ({
    token: null,
    setToken: (value) => {
        set(() => ({token: value}));
    },
}));
