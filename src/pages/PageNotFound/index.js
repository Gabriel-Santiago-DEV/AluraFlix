import styles from "./PageNotFound.module.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>
                Oops! A página que você está procurando não foi encontrada.
            </p>
            <button 
                className={styles.button} 
                onClick={() => navigate("/")}
            >
                Voltar para a Página Inicial
            </button>
        </div>
    );
}

export default PageNotFound;
