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
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} justifyContent="center">
        <form  className="signup" onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "center", color: "#525FE1", fontWeight: "500",marginTop:"2px" }}>Sign up</h2>
            {/* <label>Name :</label> */}
            <input type="text" onChange={(e) => { setUsername(e.target.value)}} value={username} placeholder="Name" />
            {/* <label>Email :</label> */}
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email id"/>
            {/* <label>Password :</label> */}
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" />
                <p style={{ fontSize: "10px" }}>*password must contain atleast one capital letter, small letter, number and symbol and length should be greater than 8.</p>
            <button className="btn" disabled={isPending}><h1>Sign up</h1></button>
                <p style={{ marginTop: "8px", textAlign: "center" }}>Already have an account? <br />{<Link to="/login" style={{ color:"rgb(110, 78, 217)" }}>Log in</Link>} now!!</p>
            {error && <div className="error">{error}</div> }
        </form>
        <ToastContainer theme="dark"/>
        <img src={SignupIcon} alt="signup" height="435px" width="435px" className="login-img"></img>
        </Stack>
     );
}
 
export default Signup;