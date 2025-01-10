import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./Modal.module.css";

const Modal = ({ video, onClose }) => {
    const [formData, setFormData] = useState({
        titulo: video?.titulo || "",
        categoria: video?.categoria || "",
        imagem: video?.imagem || "",
        video: video?.video || "",
        descricao: video?.descricao || ""
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleClear = () => {
        setFormData({
            titulo: "",
            categoria: "",
            imagem: "",
            video: "",
            descricao: ""
        });
    };

    return (
        <>
            <div className={styles.overlay}>
                <dialog open className={styles.dialog}>
                    <button className={styles.closeButton} onClick={() => onClose(null)}>
                        <FaTimes size={24} />
                    </button>
                    <h2 className={styles.title}>Editar Card</h2>
                    <form className={styles.form} action="/submit" method="POST">
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

                        <div className={styles.buttons}>
                            <button type="button" className={styles.buttonPrimary}>
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
                </dialog>
            </div>
        </>
    );
};

export default Modal;
