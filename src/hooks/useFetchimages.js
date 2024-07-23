import React, { useCallback, useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const useFetchimages = () => {
  const [imgs, setImgs] = useState([]);
  const [input, setInput] = useState("");
  const [loanding, setLoanding] = useState(true);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const peticion = useCallback(async () => {
    const Key = "client_id=JmaXxnBVEcz8AIEypR9E8b83GLB2el4V_pH7tGhXVIM";

    let route = `https://api.unsplash.com/photos/?${Key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${Key}`;
    }

    setLoanding(true);

    const res = await fetch(route);

    const data = await res.json();

    if (data.results) {
      setImgs(data.results);
    } else {
      setImgs(data);
    }

    setLoanding(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSutmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);

    e.target[0].value = "";
  };

  return [
    imgs,
    loanding,
    handleSutmit,
    photoIndex,
    lightboxIsOpen,
    setPhotoIndex,
    setLightboxIsOpen,
  ];
};
