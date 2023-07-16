import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Stack,Divider } from "@mui/material";
import { Link } from "react-router-dom";
import SignupIcon from "../assets/icons/SignupIcon.jpg"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
  
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
     const [username , setUsername] = useState("")
    const { signup, isPending, error } = useSignup();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await signup(email , password);
        
    }
    return ( 
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} mt="40px" justifyContent="center">
        <form  className="signup" onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "#525FE1", fontWeight: "400",marginTop:"0px" }}>Sign up</h1>
            <label>Name :</label>
            <input type="text" onChange={(e) => { setUsername(e.target.value)}} value={username} />
            <label>Email :</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
            <label>Password :</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
            <button className="btn" disabled={isPending}><h1>Sign up</h1></button>
            <p style={{ marginTop: "8px", textAlign: "center" }}>Already have a account? <br />{<Link to="/login">Log in</Link>} now!!</p>
            {error && <div className="error">{error}</div> }
        </form>
        <ToastContainer theme="dark"/>
        <img src={SignupIcon} alt="signup" height="520px" width="500px" className="login-img"></img>
        </Stack>
     );
}
 
export default Signup;