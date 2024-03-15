import { useEffect, useState } from "react";
import {
    getFileContent,
    getArticleTitleAndDate,
} from "../utilities/ArticleParser";
import Page from "../components/Page";

interface ArticleProps {
    filename: string;
}

const ARTICLES_FOLDER = "articles";

function Article(props: ArticleProps) {
    const [content, setContent] = useState("");

    const fullpath = `${ARTICLES_FOLDER}/${props.filename}`;

    useEffect(() => {
        getFileContent(fullpath).then(setContent).catch(console.error);
        getArticleTitleAndDate(fullpath).then(({ title, date }) => {
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
