import logo1 from "../images/logo1.svg";
import logo2 from "../images/logo2.svg";
import pablo from "../images/pablo.svg"
import "../styles/login.scss"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const LogIn = () => {

  const [showpassword,setShowpassword] = useState(false)
  const [show,setShow] = useState(true)

  let navigation = useNavigate()

  const togglePassword =()=>{
    setShowpassword(!showpassword)
    setShow(!show)
  }


  return (
    <div className="container">
      <div className="logo">
        <img src={logo1} id="logo1" alt="" />
        <img src={logo2} id="log2" alt="" />
      </div>

      <div className="center">
            <div>
                <img src={pablo} id="signInImg" alt="" />
            </div>

            <div className="form">
                <h2>Welcome!</h2>
                <p>Enter details to login.</p>

                <input type="email" name="" id="signInEmail" placeholder="Email"/>

                <input type={showpassword ? "text" : "password"} name="" id="signInEmail" placeholder="Password"/>
                <span id="show-password" onClick={togglePassword}>{show ? "Show" : "Hide"}</span>

                <h4 className="forgotP">FORGOT PASSWORD?</h4>

                <button className="login" onClick={()=> navigation("/user")}>LOG IN</button>
            </div>
      </div>

      {/* <div className="body">
        <div className="p">
            <img src={pablo} id="signInImg" alt="" />
        </div>
        <div className="p">
            <div className="signIn">
                <h2>Welcome!</h2>
                <p>Enter details to login.</p>

                <input type="email" name="" id="signInEmail" placeholder="Email"/>

                <input type="password" name="" id="signInEmail" placeholder="Password"/>
                <span id="show-password">Show</span>

                <h4>FORGOT PASSWORD?</h4>

                <button>LOG IN</button>
            </div>
        </div>
      </div> */}
    </div>
  );
};

export default LogIn;
