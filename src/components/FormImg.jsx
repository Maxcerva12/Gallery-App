import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSutmit }) => {
  return (
    <>
      <form onSubmit={handleSutmit} className="my-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar imágenes..."
            name="inputText"
            aria-label="Buscar imágenes"
          />
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    </>
  );
};

FormImg.propTypes = {
    handleSutmit: PropTypes.func,
};

export default FormImg;
