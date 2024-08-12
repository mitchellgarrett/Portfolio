import { useEffect, useState } from "react";
import {
    getFileContent,
    getArticleMetadata,
} from "../utilities/ArticleParser";
import Page from "../components/Page";
import "../styles/Code.css";

interface ArticleProps {
    filename: string;
}

const ARTICLES_FOLDER = "articles";

function Article(props: ArticleProps) {
    const [content, setContent] = useState("");

    const fullpath = `${ARTICLES_FOLDER}/${props.filename}`;
	
	// TODO: Pass parameters into props
    useEffect(() => {
        getFileContent(fullpath).then(setContent).catch(console.error);
        getArticleMetadata("key", fullpath, "link").then(({ title, date }) => {
            document.title = title!;
        });
    }, [fullpath]);

    return (
        <Page>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Page>
    );
}

export default Article;
