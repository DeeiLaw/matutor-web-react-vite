import { Link } from 'react-router-dom';

import "./Landing.css";
import whatImg from "../Assets/what is matutor.png";
import studentsLP from "../Assets/studentsLP.png";
import { LuMousePointerClick } from "react-icons/lu";


const HomePage = () => {

    return (
      <div>
        <div className="box1">
        <LuMousePointerClick className="pointer"/>
          <img src={studentsLP} alt="" className="studentsLP"/>
          <img src={whatImg} alt="" className="whatIMG"/>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur aliquam mi quis vehicula. Praesent aliquet neque metus, eu mollis ante bibendum nec. Suspendisse nunc leo, pellentesque vitae semper in, consequat non tortor. Curabitur arcu purus, mollis in blandit et, imperdiet a lectus. In fermentum vehicula ultrices. 
          </div>
          <Link to="/login"
                className="button-submit"
              >
                ready to join us?
            </Link>      
        </div>
      </div>
    );
}

export default HomePage;