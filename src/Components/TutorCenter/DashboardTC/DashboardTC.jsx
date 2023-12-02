import "./DashboardTC.css";
import { Link } from 'react-router-dom';


const DashboardTC = () => {

    return (

        <Link to="/login"
          className="submit"
        >
          Test to login
        </Link>
       
    );
}

export default DashboardTC;