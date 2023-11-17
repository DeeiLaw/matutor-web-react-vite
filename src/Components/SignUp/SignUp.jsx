import React, { useState } from 'react'
import './SignUp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { AiFillHome } from "react-icons/ai" 
import { MdCake } from "react-icons/md"
import { RiParentFill } from "react-icons/ri"

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    /*function userType(event) {
        console.log(event.target.value)
    } get*/
    
    const [item, setItem] = useState("Learner");
    
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div hidden></div>:
                    <select className="selection" value={item} onChange={(e) => setItem(e.target.value)}>
                        <option value="Learner">Learner</option>
                        <option value="Tutor">Tutor</option>
                        <option value="Tutoring Center">Tutoring Center</option>
                    </select>
                }
                {action==="Login"?<div hidden></div>:
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Name"/>
                    </div>
                }
                {action==="Sign Up" && item==="Learner"?<div className="input"> 
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Your Email"/> 
                    </div> :
                    <div hidden></div>
                }
                <div className="input">
                    <img src={email_icon} alt="" />
                    {action==="Login"?<input type="email" placeholder="Email"/>:
                        <div>
                            {
                                {
                                    "Learner": <input type="email" placeholder="Parent's/Guardian's Email"/>,
                                }[item] 
                                ||  <input type="email" placeholder="Email"/>
                            }
                        </div>   
                    }
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
                {action==="Login"?<div></div>:
                    <div className="input">
                        <AiFillHome className="inputIcon" size="1.7em" alt="AddressIcon"/>
                        <input type="text" placeholder="Address"/>
                    </div>
                } 
                {action==="Sign Up" && item!=="Tutoring Center"?
                
                    <div className="input">
                        <MdCake className="inputIcon" size="1.7em" alt="Birthdate"/>
                        <input type="date" placeholder="Birthdate"/>
                    </div>
                    :<div hidden></div>  
                }                    
            </div>
            {action==="Sign Up"?<div hidden></div>: 
                <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            }
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup