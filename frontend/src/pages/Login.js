import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import LoginIcon from "../assets/icons/loginIcon.png"
import { Stack ,Divider} from "@mui/material";
import { Link} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const {login ,error, isPending} = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);    
    }
    return (
      <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} justifyContent="center">
        <form className="login" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center", color:"#525FE1" , fontWeight:"500" }}> Login</h2>
            {/* <label>Email :</label> */}
          <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email id" />
            {/* <label>Password :</label> */}
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" />
          <button className="btn" disabled={isPending}><h1>Log in</h1></button>
          <p style={{ marginTop: "8px", textAlign: "center" }}>Don't have an account yet? <br />{<Link to="/signup" style={{ color: "rgb(110, 78, 217)" }}>Sign up</Link>} now!!</p>
            {error && <div className="error">{error}</div>}
        </form>
        <ToastContainer theme="dark" />
        <img src={LoginIcon} alt="login" height="360px" width="360px" className="login-img"></img>
      </Stack>
  
    );
}

export default Login;