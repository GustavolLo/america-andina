import React from "react";
import diablada from "../../images/diablada.jpg";
import huayno from "../../images/huayno.jpg";
import anaconda from "../../images/anaconda.jpg";

export default function DancesPage() {
  return (
    <div>
      <h1>Danses que l'on performe</h1>
      <div>
        <h3>Diablada</h3>
        <p>Description de Diablada</p>
        <img src={diablada} alt="Diablada" />
      </div>
      <div>
        <h3>Huayno</h3>
        <p>Description de Huayno</p>
        <img src={huayno} alt="Huayno" />
      </div>
      <div>
        <h3>Anaconda</h3>
        <p>Description de Anaconda</p>
        <img src={anaconda} alt="Anaconda" />
      </div>
    </div>
  );
}
