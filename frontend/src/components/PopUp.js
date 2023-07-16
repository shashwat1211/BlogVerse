import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import React from 'react'
import { useLogout } from "../hooks/useLogout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const PopUp = ({data}) => {
    const { logout } = useLogout();
    const handleClick = () => {
        logout()
    }
  return (
    <Popup contentStyle={{ width: "30%", borderRadius: "12px" }} trigger={<button>Log Out</button>} modal nested>{close => (
        <div className='modal' style={{ padding: "20px" }}>
            <div className='text'>
                <h3>{data}</h3>
            </div>
            <div className="buttons">
                <button onClick={handleClick}> Yes</button>
                <button onClick={() => close()}>No</button>
            </div>
            <ToastContainer theme="dark"/>
        </div>
      )}
    </Popup>
  )
}

export default PopUp

