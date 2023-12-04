import "./Landing.css";
import { Link } from 'react-router-dom';
import whatImg from "../Assets/what is matutor.png";

const HomePage = () => {

    return (
      <div className="container">
        <img src={whatImg} alt="" className="whatIMG"/>
        <div>
        </div>
        <Link to="/login"
            className="submit"
          >
            Start Now
          </Link>
      </div>
    );
}

export default HomePage;