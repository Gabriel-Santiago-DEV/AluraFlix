import React from "react";

const VideoIframeResponsive = ({ youtubeID }) => {
  const videoUrl = `https://www.youtube.com/embed/${youtubeID}`;
  return (
    <div >
      <iframe
        src={videoUrl}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoIframeResponsive;
