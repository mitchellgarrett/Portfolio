export const getFileContent = async (path: string): Promise<string> => {
    const response = await fetch(`${process.env.PUBLIC_URL}/${path}`);

    if (!response.ok) {
        throw response;
    }

    return response.text();
};

export const getArticleTitleAndDate = async (
    path: string
): Promise<{ title: string; date: string }> => {
    const content = await getFileContent(path);

    if (!content) return { title: "Article", date: "Unknown" };

    const parser = new DOMParser().parseFromString(content, "text/html");

    const title = parser.getElementsByTagName("h1")[0].childNodes[0].nodeValue!;
    const date =
        parser.getElementsByTagName("time")[0].childNodes[0].nodeValue!;

    return { title, date };
};
