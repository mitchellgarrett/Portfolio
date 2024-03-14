import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/howdy">About</Link>
            <a href="https://github.com/mitchellgarrett">Github</a>
            <hr />
        </div>
    );
}

export default Navbar;
