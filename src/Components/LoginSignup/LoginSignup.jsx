import React, { useState } from "react";
import "./LoginSignup.css";
import axios from "axios";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import mttrlogo from "../Assets/Matutorlogo_whitebg.png";
import students from "../Assets/students.png";
import { AiFillHome } from "react-icons/ai";
import { MdCake } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const LoginSignup = () => {

  const [action, setAction] = useState("Login");
  const [item, setItem] = useState("Learner");

  //data to send to backend
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //backend
  const learnerUrl = "http://localhost:3000/learner/login";
  
  const handleLoginClick = (event) => {
    console.log("clicked- log in");
    try {
      axios
        .post(learnerUrl, {
          learnerEmail: email,
          learnerPassword: password,
        })
        .then((response) => {
          const responseData = response.data;
          console.log(responseData);

          sessionStorage.setItem("userData", JSON.stringify(responseData));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (Exception) {
      console.error("Failed: ", Exception);
    }
    setAction("Login");
  };

  const handleSignUpClick = (event) => {
    try {
      axios.post(learnerUrl);
    } catch (event) {}
    setAction("Sign Up");
  };

  const handleSignUpLoginClick =(event) => {
    console.log("clicked- transferred to Main Login");
    setAction("Login");
  }

  const handleLoginSignupClick =(event) => {
    console.log("clicked- transferred to SignUp");
    setAction("Sign Up");
  }

  /*function userType(event) {
        console.log(event.target.value)
    } get*/

  return (
    <div className="parent">
      {action === "Login" ? (
      <img src={students} alt="" className="imgStud"/> ):(<div hidden></div>)}
      <div className="container">
        <div className="pseudoTab">
          <FaSquare/>
          <FaSquare/>
          <FaSquare/>
          <span className="pseudoTabText">matutor {action}</span>
          <IoMdClose className="IoMdClose"/>
        </div>
        <div className="header">
        {action === "Login" ? ( 
          <img src={mttrlogo} alt="mttrlogo" className="logo"/>
          ) : (
          <div>
            <div 
              className="text">
                {action}
              </div>
            </div>
          )}
          <div className="underline"></div>
        </div>
          {action === "Login" ? (
            /* RENDER LOGIN FIELDS */
            <div className="inputs">
              <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value); }}/>
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                  <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value);}}/>
              </div>
              
            </div>
          ) : (
            /* Render Register Fields */
            <div className="inputs">
              <select className="selection" value={item} onChange={(e) => setItem(e.target.value)}>
                <option value="Learner">Learner</option>
                <option value="Tutor">Tutor</option>
                <option value="Tutoring Center">Tutoring Center</option>
              </select>
              
              <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email" />
              </div>

              {item === "Tutoring Center" ? (
                <div className="input">
                  <FaSchoolCircleCheck  className="inputIcon" size="1.7em" alt="AddressIcon" />
                  <input type="text" placeholder="Tutor Center's Name" />
                </div>
              ) : (
              <div>
                <div className="input">
                  <img src={user_icon} alt="" />
                  <input type="text" placeholder="First Name" />
                </div>
                <br/>
                <div className="input">
                  <img src={user_icon} alt="" />
                  <input type="text" placeholder="Last Name" />
                </div>
              </div> 
              )}

              {item === "Learner" ? ( 
                <div>
                  <div className="input">
                    <RiParentFill className="inputIcon" size="1.7em" alt="AddressIcon" />
                    <input type="email" placeholder="Parent's/Guardian's Email" />
                  </div>
                  <br/>
                  <div className="input">
                    <RiParentFill className="inputIcon" size="1.7em" alt="AddressIcon" />
                    <input type="text" placeholder="Guardian's Full Name" />
                  </div>
                </div>
              ):(<div hidden></div> )}

              <div className="input">
                <BsFillTelephoneFill className="inputIcon" size="1.7em" alt="AddressIcon" />
                <span className="spanPhone">+63</span><input className="inputPhone" type="text" placeholder="Contact Number" />
              </div>
              {item === "Tutor" ? ( 
                <div className="input">    
                  <FaSchoolCircleCheck  className="inputIcon" size="1.7em" alt="AddressIcon" />
                  <input className="inputPhone" type="text" placeholder="Associated Tutoring Center" />
                </div>
              ):(<div hidden></div>)}

              <div className="input">
                <AiFillHome className="inputIcon" size="1.7em" alt="AddressIcon" />
                <input type="text" placeholder="Address" />
              </div>

              {item === "Tutoring Center" ? ( 
                <div hidden></div>                 
              ) : (
                <div className="input">
                  <MdCake className="inputIcon" size="1.7em" alt="Birthdate" />
                  <input type="date" placeholder="Birthdate" />
                </div>
              )}
              
              <div className="input">
              <img src={password_icon} alt="" />
                  <input type="password" placeholder="Password"/>
              </div>
            </div>
          )}
        {action === "Sign Up" ? (
          <div hidden></div>
        ) : (
          <div className="forgot-password">
            Forgot Password? <span>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
        {action === "Login" ? ( 
          <div
            className="submit gray" 
            onClick={handleLoginSignupClick}
          >
            Don't Have an Account?
          </div> ) : ( 
            <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={handleSignUpClick}
          >
            Sign Up
          </div>
          )}
          {action === "Sign Up" ? ( 
              <div 
                className="submit gray"
                onClick={handleSignUpLoginClick}
              >
                I have an Account
              </div> 
            ) : (
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {handleLoginClick()}}
              >
                Login
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;