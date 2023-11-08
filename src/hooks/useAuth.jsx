import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        // Handle the case when AuthContext is not yet available
        return { user: null, loading: true, /* other default values */ };
    }
    return auth;
};

export default useAuth;