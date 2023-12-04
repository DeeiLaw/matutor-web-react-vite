import "./Landing.css";
import { Link } from 'react-router-dom';


const HomePage = () => {

    return (
        <div>
          Welcome to Matutor!
          <Link to="/login"
            className="submit"
          >
            Start Now
          </Link>
        </div>
    );
}

export default HomePage;