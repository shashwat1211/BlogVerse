import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
export const useLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsPending(true)
        setError(null)
        const response = await fetch("/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error)
            setIsPending(false);
            toast.error("Log in failed")
        }
        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json))
            dispatch({ type: "LOGIN", payload: json })
            setIsPending(false)
            toast.loading("Logging in...")
            setTimeout(() => {
                navigate("/")
            }, 1200);
            
            

        }
        
    }
    return { login, error, isPending }
}

