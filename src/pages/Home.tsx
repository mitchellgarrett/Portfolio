import "../styles/Home.css";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { useEffect, useState } from "react";
import { getArticleMetadata } from "../utilities/ArticleParser";

interface HomeProps {
    articles_to_load: string[];
}

interface ArticleMetadata {
	key: string;
    path: string;
	link: string;
    title: string;
    date: string;
}

function Home(props: HomeProps) {
    const [articleMetadata, setArticleMetadata] = useState<ArticleMetadata[]>([]);

	useEffect(() => {
		Promise.all(props.articles_to_load.map((article) => getArticleMetadata(article, `articles/${article}.html`, `article/${article}`))).then(articles => setArticleMetadata(articles));
	}, [props.articles_to_load]);
	
    document.title = "Mitchell Garrett";
    return (
        <Page>
            <h1>Articles</h1>
            <>
                {articleMetadata.length > 0 ? (
                    loadArticles(articleMetadata)
                ) : (
                    <>{loadDefaultMessage()}</>
                )}
            </>
        </Page>
    );
}

function loadArticles(articleMetadata: ArticleMetadata[]) {
    return articleMetadata
		// Sort into most recent order
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		// Return link with title and date
		.map(({ key, link, title, date }) => (
			<div key={key}>
				<Link to={link}>{title}</Link>
				<br />
				<time>{date}</time>
			</div>
    	)
	);
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
