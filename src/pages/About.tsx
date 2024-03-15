import Page from "../components/Page";

function About() {
    document.title = "Mitchell Garrett";

    return (
        <Page>
            <h1>About</h1>
            <p>Howdy, I'm Mitchell.</p>
            <p>
                I'm a software engineer whose main interests include compilers,
                computer graphics, game development, and operating systems and I
                hope to use this website as a way to document my journey as I
                explore those topics.
            </p>
            <p>
                Feel free to reach out to me at{" "}
                <a href="mailto:garrettemitchell@gmail.com">
                    garrettemitchell@gmail.com
                </a>{" "}
                if you have any thoughts, or see what I'm up to on{" "}
                <a href="https://github.com/mitchellgarrett">Github</a>.
            </p>
        </Page>
    );
}

export default About;
