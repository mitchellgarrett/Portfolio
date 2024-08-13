import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <div className="left">
                <p>Mitchell Garrett</p>
            </div>
            <div className="right">
                <Link to="/">Home</Link>
                <Link to="/howdy">About</Link>
                <a href="https://github.com/mitchellgarrett" target="_blank" rel="noreferrer">Github</a>
            </div>
            <hr />
        </div>
    );
}

export default Header;
