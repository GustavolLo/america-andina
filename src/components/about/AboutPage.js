import React from "react";
import fotoGrupal from "../../images/foto-grupal.jpg";

export default function AboutPage() {
  return (
    <div>
      <h1>Qui sommes nous?</h1>
      <span>
        América Andina est une association qui diffuse la culture
        latino-américaine à travers la danse.
      </span>
      <p>
        Nous sommes des personnes intéressées à partager des danses
        latino-américaines avec le monde entier. Nous voulons faire vivre et
        évoluer cette association en permanence.
      </p>
      <img src={fotoGrupal} alt="Foto Grupal" />
    </div>
  );
}
