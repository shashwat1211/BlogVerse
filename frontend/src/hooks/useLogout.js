import { useAuthContext } from "./useAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const useLogout=()=>{
    const {dispatch}  = useAuthContext();
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.removeItem("user");
        toast.loading("Logging out....")
        setTimeout(() => {
            dispatch({ type: "LOGOUT" })
            navigate("/login")
        }, 1100);
        
    }
    return {logout}
}