import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/howdy" element={<About />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
