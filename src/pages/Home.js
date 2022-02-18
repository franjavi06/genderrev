import React from "react";
import { Link } from "react-router-dom";
import imagen from "../images/fiestas.jpg";
import teamboy from "../images/teamboy.jpg";
import teamgirl from "../images/teamgirl.jpg";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="">
        <div className="row">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img
              src={imagen}
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CJ's Gender Reveal</h5>
              <h4 className="card-title">Votos: 5</h4>
              <p className="card-text">
                Vota para conocer al nuevo miembro de nuestra familia!
              </p>
              <Link className="btn btn-primary" to="vote">
                Votar
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <div style={{ width: "5rem" }}>
              <img src={teamboy} className="img-thumbnail" alt="..." />
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col text-center">
            <div style={{ width: "5rem" }}>
              <img src={teamgirl} className="img-thumbnail" alt="..." />
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
