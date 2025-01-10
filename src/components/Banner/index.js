import VideoIframeResponsive from "./VideoIframeRsponsive/VideoIframeResponsive";
import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";

const BannerMain = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://my-json-server.typicode.com/Gabriel-Santiago-DEV/aluraflix-api/videos";

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const selectedVideo = data.find((video) => video.id === 1);
        setVideo(selectedVideo);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar vídeo:", error);
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  if (loading) {
    return <div>Carregando vídeo...</div>;
  }

  if (!video) {
    return <div>Vídeo não encontrado.</div>;
  }

  const youTubeID = video.url.split("v=")[1];
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <div
      className={styles.bannerMainContainer}
      style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className={styles.contentAreaContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>{video.titulo}</h2>
          <p className={styles.description}>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex!</p>
        </div>
        <div className={styles.item}>
          <VideoIframeResponsive youtubeID={youTubeID} />
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
