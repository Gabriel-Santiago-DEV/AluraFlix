import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "components/Modal";
import styles from "./Secoes.module.css";

function Secoes() {
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://my-json-server.typicode.com/Gabriel-Santiago-DEV/aluraflix-api/db");
                const data = await response.json();
                setCategorias(data.categorias);
                setVideos(data.videos);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const onEdit = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
    };

    const categorizeVideos = (categoriaId) => {
        return videos.filter((video) => video.categoriaId === categoriaId);
    };

    const renderCategorias = () => {
        return categorias.map((categoria) => {
            const categoriaVideos = categorizeVideos(categoria.id);

            return (
                <div key={categoria.id} className={styles.categoria}>
                    <h2
                        className={`${styles.titulo} ${styles[categoria.titulo.toLowerCase().replace(/\s+/g, "-")]}`}
                        style={{ backgroundColor: categoria.cor }}
                    >
                        {categoria.titulo}
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className={styles.carrossel}
                    >
                        {categoriaVideos.length > 0 ? (
                            categoriaVideos.map((video) => (
                                <SwiperSlide key={video.id}>
                                    <div
                                        className={styles.video}
                                        style={{
                                            borderColor: categoria.cor,
                                            boxShadow: `0 4px 8px ${categoria.cor}80`,
                                        }}
                                    >
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${video.url.split("v=")[1]}`}
                                            title={video.titulo}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                        <p>{video.descricao}</p>

                                        <div className={styles.botaoContainer}>
                                            <button className={styles.botaoEditar} onClick={() => onEdit(video)}>
                                                <FaEdit /> Editar
                                            </button>
                                            <button className={styles.botaoExcluir}>
                                                <FaTrashAlt /> Excluir
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <p>Sem vídeos para esta categoria.</p>
                        )}
                    </Swiper>
                </div>
            );
        });
    };

    return (
        <div className={styles.container}>
            {loading ? <p>Carregando dados...</p> : renderCategorias()}
            {isModalOpen && <Modal video={selectedVideo} onClose={closeModal} />}
        </div>
    );
}

export default Secoes;
