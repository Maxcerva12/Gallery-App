import React, { useCallback, useEffect, useState } from "react";
import "./Card.css";
import Loanding from "./Loanding";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import FormImg from "./FormImg";
import { useFetchimages } from "../hooks/useFetchimages";

const Cards2 = () => {
  const [
    imgs,
    loanding,
    handleSutmit,
    photoIndex,
    lightboxIsOpen,
    setPhotoIndex,
    setLightboxIsOpen,
  ] = useFetchimages();
  const [imagesLoaded, setImagesLoaded] = useState([]);

  useEffect(() => {
    // Precarga las imágenes
    imgs.forEach((img, index) => {
      const image = new Image();
      image.src = img.urls.regular; // se usa 'regular' en lugar de 'full' para una carga más rápida
      image.onload = () => {
        setImagesLoaded((prev) => [...prev, index]);
      };
    });
  }, [imgs]);

  return (
    <>
      <FormImg handleSutmit={handleSutmit} />
      <hr />

      {loanding && <Loanding />}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {imgs.map((img, index) => (
          <div key={img.id} className="col">
            <div
              className="card h-100 shadow-sm hover-effect"
              onClick={() => {
                setPhotoIndex(index);
                setLightboxIsOpen(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={img.urls.regular}
                className="card-img-top"
                alt={img.alt_description || "Gallery image"}
                style={{ objectFit: "cover", height: "20rem" }}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">
                  {img.description || img.alt_description}
                </h5>
                <p className="card-text">
                  <small className="text-muted">Por {img.user.name}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={imgs[photoIndex].urls.regular}
          nextSrc={imgs[(photoIndex + 1) % imgs.length].urls.regular}
          prevSrc={
            imgs[(photoIndex + imgs.length - 1) % imgs.length].urls.regular
          }
          onCloseRequest={() => setLightboxIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imgs.length - 1) % imgs.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imgs.length)
          }
          imageTitle={
            imgs[photoIndex].description || imgs[photoIndex].alt_description
          }
          imageCaption={`por ${imgs[photoIndex].user.name}`}
          loadingElement={<div className="loading-spinner">Cargando...</div>}
        />
      )}
    </>
  );
};

export default Cards2;
