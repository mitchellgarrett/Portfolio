import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Page(props: PropsWithChildren) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default Page;
