import React from "react";
import fotoGrupal from "../../images/foto-grupal.jpg";

export default function AboutPage() {
  return (
    <div className="container">
      <h1 className="display-2">Qui sommes nous?</h1>
      <div className="row">
        <div className="col">
          <img src={fotoGrupal} alt="Foto Grupal" />
        </div>
        <div className="col">
          <p>
            América Andina est une association qui diffuse la culture
            latino-américaine à travers la danse. Nous sommes des personnes
            intéressées à partager des danses latino-américaines avec le monde
            entier. Nous voulons faire vivre et évoluer cette association en
            permanence.
          </p>
        </div>
      </div>
    </div>
  );
}
