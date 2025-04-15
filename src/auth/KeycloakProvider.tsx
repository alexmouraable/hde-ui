import { createContext, ReactNode, useState, useEffect } from 'react';
import keycloak from './index';

interface AuthContextType {
    keycloak?: typeof keycloak;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false
});

interface KeycloakProviderProps {
    children: ReactNode;
}

let isInitialized = false;

export function KeycloakProvider({ children }: KeycloakProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (isInitialized) {
            return;
        }

        isInitialized = true;

        keycloak.init({ onLoad: 'login-required' })
            .then(auth => setIsAuthenticated(auth));
    }, []);

    return (
        <AuthContext.Provider value={{ keycloak, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}
