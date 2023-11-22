import "./Landing.css";
import { Link } from 'react-router-dom';


const HomePage = () => {

    return (

        <Link to="/login"
          className="submit"
        >
          Test to login
        </Link>
       
    );
}

export default HomePage;