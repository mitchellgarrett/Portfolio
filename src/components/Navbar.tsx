import { useNavigate } from "react-router";
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="Navbar">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/howdy")}>About</button>
            <a href="https://github.com/mitchellgarrett">Github</a>
            <hr />
        </div>
    );
}

export default Navbar;
