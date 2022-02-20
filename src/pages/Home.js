import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imagen from "../images/fiestas.jpg";
import teamboy from "../images/teamboy.jpg";
import teamgirl from "../images/teamgirl.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getVotos } from "../redux/apicalls/voto";
import VoteList from "../components/VoteList";

const Home = () => {
  const votos = useSelector((state) => state.voto.votos);
  const isLoading = useSelector((state) => state.voto.isFetching);
  const error = useSelector((state) => state.voto.error);
  const dispatch = useDispatch();

  useEffect(() => {
    getVotos(dispatch);
  }, [dispatch]);

  useEffect(() => {
    console.log(votos);
  }, [votos]);

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
              <h4 className="card-title">Votos: {votos.length}</h4>
              <p className="card-text">
                Vota para conocer al nuevo miembro de nuestra familia!
              </p>
              <Link className="btn btn-primary" to="/genderrev/vote">
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
            <VoteList votos={votos.filter((voto) => voto.voto == "B")} />
          </div>
          <div className="col text-center">
            <div style={{ width: "5rem" }}>
              <img src={teamgirl} className="img-thumbnail" alt="..." />
            </div>
            <VoteList votos={votos.filter((voto) => voto.voto == "G")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
