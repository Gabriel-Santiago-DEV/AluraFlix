import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "components/Banner";
import Rodape from "components/Footer";
import Secoes from "components/Secoes";
import Cabecalho from "components/Cabecalho";

function Inicio() {
    const location = useLocation();

    useEffect(() => {

    }, [location]);

    return (
        <>
            <Cabecalho />
            <Banner />
            <Secoes />
            <Rodape />
        </>
    );
}

export default Inicio;
