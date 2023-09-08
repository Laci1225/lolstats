import {createContext} from "react";

interface AuthSoreContext {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void
}

const AuthStore = createContext<AuthSoreContext | null>(null);
export default AuthStore;