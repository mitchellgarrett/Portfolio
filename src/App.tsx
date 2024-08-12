import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Article from "./pages/Article";

function App() {
    const articles_to_load = ["2024-03-14", "2024-03-15"];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home articles_to_load={articles_to_load} />} />
                <Route path="/about" element={<About />} />
                <Route path="/howdy" element={<About />} />
                <>{loadArticles(articles_to_load)}</>
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

function loadArticles(articles: string[]) {
    return articles.map((article) => (
        <Route
            key={article}
            path={`/article/${article}`}
            element={<Article filename={`${article}.html`} />}
        />
    ));
}

export default App;
