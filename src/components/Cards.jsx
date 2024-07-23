import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import "./Card.css";
import Loanding from "./Loanding";

const Cards = () => {
  const [imgs, setImgs] = useState([]);
  const [input, setInput] = useState("");
  const [loanding, setLoanding] = useState(true);

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
  };

  return (
    <>
      <form onSubmit={handleSutmit}>
        <label className="w-75">
          {" "}
          Buscar: <input className="w-100" type="text" name="inputText" />
        </label>
        <button type="submit" className="btn btn-warning m-2">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
      <hr />

      {loanding && <Loanding />}

      <div className="row">
        {imgs.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
