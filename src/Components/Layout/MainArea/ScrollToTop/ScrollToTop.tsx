import "./ScrollToTop.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { JsxElement } from "typescript";
// function ScrollToTop(): JSX.Element {

//     return (
//         <div className="ScrollToTop">

//         </div>
//     );
// }

// export default ScrollToTop;


export default function ScrollToTop(): JSX.Element {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}