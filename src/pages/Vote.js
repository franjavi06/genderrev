import React, { useState } from "react";
import imagen from "../images/fiestas.jpg";
import { useNavigate } from "react-router-dom";

const Vote = () => {
  let navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [voto, setVoto] = useState(0);

  const handleVoto = (e) => {
    setVoto(e.target.value);
  };
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre, voto);

    if (voto && nombre) {
      navigate("/");
    } else {
      alert("Nombre y Voto Requeridos");
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="card text-center" style={{ width: "20rem" }}>
          <img src={imagen} className="card-img-top rounded-circle" alt="..." />
          <div className="card-body">
            <h5 className="card-title">CJ's Gender Reveal</h5>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-4 col-form-label"
                >
                  Nombre
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleNombre}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-4 col-form-label"
                >
                  Género
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="voto"
                    name="voto"
                    value={voto}
                    onChange={handleVoto}
                  >
                    <option value="0">Selecciona Género</option>
                    <option value="1">Boy</option>
                    <option value="2">Girl</option>
                  </select>
                </div>
              </div>

              <div className="row my-3">
                <button type="submit" className="btn btn-primary">
                  Votar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
