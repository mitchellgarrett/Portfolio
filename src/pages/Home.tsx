import { Link } from "react-router-dom";
import Page from "../components/Page";

function Home() {
    return (
        <Page>
            <h1>Posts</h1>
            <p>Stay tuned for upcoming articles.</p>
            <p>
                In the meantime, see what I'm <Link to="/howdy">about</Link>.
            </p>
        </Page>
    );
}

export default Home;
