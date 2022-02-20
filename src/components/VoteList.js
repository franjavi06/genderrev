import React from "react";

const VoteList = ({ votos }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {votos.map((voto, index) => (
            <tr key={voto.id}>
              <th scope="row">{index + 1}</th>
              <td>{voto.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoteList;
