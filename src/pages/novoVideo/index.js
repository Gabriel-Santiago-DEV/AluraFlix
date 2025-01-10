import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Rodape from "components/Footer";
import Cabecalho from "components/Cabecalho";
import styles from "./NovoVideo.module.css";

function NovoVideo() {
    const location = useLocation();

    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "Front-End",
        imagem: "",
        video: "",
        descricao: "",
    });

    useEffect(() => {
        console.log("Rota atual:", location.pathname);
    }, [location]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setFormData({
            titulo: "",
            categoria: "Front-End",
            imagem: "",
            video: "",
            descricao: "",
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dados enviados:", formData);
        // Aqui você pode adicionar a lógica para enviar os dados para um backend
    };

    return (
        <>
            <Cabecalho />
            <div className={styles.container}>
                <h1 className={styles.titulo}>Novo Vídeo</h1>
                <p className={styles.paragrafo}>
                    Complete o formulário para criar um novo card de vídeo.
                </p>
                <div className={styles.form}>
                    <h2 className={styles.h2}>Criar Card</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.containerDois}>
                            <div className={styles.field}>
                                <label htmlFor="titulo" className={styles.label}>
                                    Título
                                </label>
                                <input
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    className={styles.input}
                                    placeholder="Digite o título"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="categoria" className={styles.label}>
                                    Categoria
                                </label>
                                <select
                                    id="categoria"
                                    name="categoria"
                                    className={styles.select}
                                    value={formData.categoria}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Front-End">Front-End</option>
                                    <option value="Back-End">Back-End</option>
                                    <option value="Mobile">Mobile</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.containerTres}>
                            <div className={styles.field}>
                                <label htmlFor="imagem" className={styles.label}>
                                    Imagem
                                </label>
                                <input
                                    type="text"
                                    id="imagem"
                                    name="imagem"
                                    className={styles.input}
                                    placeholder="Cole o link da imagem"
                                    value={formData.imagem}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="video" className={styles.label}>
                                    Vídeo
                                </label>
                                <input
                                    type="text"
                                    id="video"
                                    name="video"
                                    className={styles.input}
                                    placeholder="Cole o link do vídeo"
                                    value={formData.video}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="descricao" className={styles.label}>
                                Descrição
                            </label>
                            <textarea
                                id="descricao"
                                name="descricao"
                                className={styles.textarea}
                                placeholder="Digite a descrição"
                                value={formData.descricao}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.buttonPrimary}>
                                Salvar
                            </button>
                            <button
                                type="button"
                                className={styles.buttonSecondary}
                                onClick={handleClear}
                            >
                                Limpar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default NovoVideo;
