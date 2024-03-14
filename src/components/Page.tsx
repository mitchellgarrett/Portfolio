import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Page(props: PropsWithChildren) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
}

export default Page;
