
import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import blogIcon from "../assets/icons/blog.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PopUp from "./PopUp";

const Navbar = () => {
    const { user } = useAuthContext();
    return (
        <>
            <div className="container">
                <div className="main" style={{display:"flex" , alignItems:"center" ,gap:"10px"}}>
                    <Link to="/"><img src={blogIcon} alt="icon" /></Link>
                    <h1 style={{fontFamily:"Poppins" , fontWeight:"400"}}>Blog Verse</h1>
                </div>
                <nav>
                    {user &&
                   
                    (<div style={{display:"flex" ,flexDirection:"column",alignItems:"center"}}>
                        <AccountCircleIcon color="primary" fontSize="large" />
                        <PopUp data={"Are you sure you want to log out?"}/>  
                    </div>)}
                  {!user && (
                        <div className="navlink" style={{ display:"flex" , justifyContent:"flex-start"}}>
                            <Link to="/signup">Sign up</Link>
                            <Link to="/login">Log in</Link>
                        </div>)
                    }
                </nav>
            </div>
        </>
        
    );
}

export default Navbar;