import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children } :LayoutProps) => {

    return (
        <>
            <div>
                <Header />
                { children}
                <Footer />
            </div>
        </>
    )

}

export default Layout;