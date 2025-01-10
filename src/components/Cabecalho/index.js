import { Link } from "react-router-dom";
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src="/imagens/Logo.png" alt="Logo Aluraflix"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    <button className={styles.botao}>HOME</button>
                </CabecalhoLink>
                <CabecalhoLink url="./novoVideo">
                    <button className={styles.botao}>NOVO VÍDEO</button>
                </CabecalhoLink>
            </nav>
        </header>
    )

}

export default Cabecalho;