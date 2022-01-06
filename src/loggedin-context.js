import { createContext } from 'react';

export const IsLoggedIn = createContext({
    isLoggedIn: false,
    token: null,
    nome: null,
    
});