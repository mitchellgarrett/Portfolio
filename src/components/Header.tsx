import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <p>Mitchell Garrett</p>
            <Link to="/">Home</Link>
            <Link to="/howdy">About</Link>
            <a href="https://github.com/mitchellgarrett">Github</a>
            <hr />
        </div>
    );
}

export default Header;
