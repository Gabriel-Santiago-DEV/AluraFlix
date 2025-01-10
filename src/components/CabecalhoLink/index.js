import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

function CabecalhoLink({ url, children }) {

    const absoluteUrl = url.startsWith("/") ? url : `/${url}`;

    return (
        <Link to={absoluteUrl} className={styles.link}>
            {children}
        </Link>
    );
}

export default CabecalhoLink;
