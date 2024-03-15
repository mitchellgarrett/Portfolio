import "../styles/Home.css";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { useEffect, useState } from "react";
import { getArticleTitleAndDate } from "../utilities/ArticleParser";

interface HomeProps {
    articles: string[];
}

interface ArticleData {
    key: string;
    title: string;
    date: string;
}

function Home(props: HomeProps) {
    const [articleData, setArticleData] = useState<ArticleData[]>([]);

    useEffect(() => {
        setArticleData([]);
        props.articles.forEach((article) => {
            const path = `articles/${article}.html`;
            getArticleTitleAndDate(path).then(({ title, date }) => {
                if (!articleData.includes({ key: article, title, date }))
                    setArticleData([
                        ...articleData,
                        { key: article, title, date },
                    ]);
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.articles]);

    document.title = "Mitchell Garrett";

    return (
        <Page>
            <h1>Articles</h1>
            <>
                {articleData.length > 0 ? (
                    loadArticles(articleData)
                ) : (
                    <>{loadDefaultMessage()}</>
                )}
            </>
        </Page>
    );
}

function loadArticles(articleData: ArticleData[]) {
    return articleData.map(({ key, title, date }) => (
        <div key={key}>
            <Link to={`/article/${key}`}>{title}</Link>
            <br />
            <time>{date}</time>
        </div>
    ));
}

function loadDefaultMessage() {
    return (
        <>
            <p>Stay tuned for upcoming posts.</p>
            <p>
                In the meantime, see what I'm <Link to="/howdy">about</Link>.
            </p>
        </>
    );
}

export default Home;
