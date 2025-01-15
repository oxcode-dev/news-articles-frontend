import { useEffect } from "react";
// import { useLocation } from "react-router";
import { ReactNode } from "react"

type ScrollToTopProps = {
    children: ReactNode
}

const ScrollToTop = (props: ScrollToTopProps) => {

    // const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>{props.children}</>
};

export default ScrollToTop;