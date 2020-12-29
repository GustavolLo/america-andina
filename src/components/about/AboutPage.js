import React from "react";
import fotoGrupal from "../../images/foto-grupal.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="container">
      <h1 className="display-2 text-center my-5 pt-3">Qui sommes nous?</h1>
      <div className="row p-3">
        <div className="col">
          <img src={fotoGrupal} alt="Foto Grupal" />
        </div>
        <div className="col">
          <div className="text">
            <h5 className="display-5 m-2">Une Association avec une histoire</h5>
            <p className="text-justify middle m-2">
              América Andina est une association qui diffuse la culture
              latino-américaine à travers la danse. Nous sommes des personnes
              intéressées à partager des danses latino-américaines avec le monde
              entier. Nous voulons faire vivre et évoluer cette association en
              permanence. América Andina est une association qui diffuse la
              culture latino-américaine à travers la danse. Nous sommes des
              personnes intéressées à partager des danses latino-américaines
              avec le monde entier. Nous voulons faire vivre et évoluer cette
              association en permanence. América Andina est une association qui
              diffuse la culture latino-américaine à travers la danse. Nous
              sommes des personnes intéressées à partager des danses
              latino-américaines avec le monde entier. Nous voulons faire vivre
              et évoluer cette association en permanence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
