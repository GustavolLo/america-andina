import React from "react";
import "./DancesPage.css";
import diablada from "../../images/diablada.jpg";
import huayno from "../../images/huayno.jpg";
import anaconda from "../../images/anaconda.jpg";

export default function DancesPage() {
  return (
    <div className="container">
      <h1 className="display-2 text-center my-5">Danses que l'on performe</h1>
      {/* First Card */}
      <div className="row p-3">
        <div className="col">
          <div className="card mb-3 card-horizontal">
            <img className="card-img-top" src={diablada} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Diablada</h5>
              <p className="card-text text-justify">
                Diablada est une danse traditionnelle du Département d'Oruro de
                Bolivie nommé pour les masques de diable des danseurs, et la
                plus représentative du carnaval d'Oruro et de la culture
                bolivienne. Cette expression culturelle bolivienne rassemble des
                éléments catholiques et autochtones et représente la lutte entre
                le bien et le mal.
              </p>
              <p className="card-text">
                <small class="text-muted">Last updated x mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className="row p-3">
        <div className="col">
          <div className="card mb-3 card-horizontal">
            <img className="card-img-top" src={huayno} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Huayno</h5>
              <p className="card-text text-justify">
                Le huayno — huaino en espagnol ou huaiño en espagnol de Bolivie
                — est à la fois une musique et une danse populaires typique du
                Pérou qui remonte à l'époque précolombienne. Elle se rencontre
                dans toute l'aire andine, y compris en Bolivie, si bien qu'il
                n'est pas possible d'attribuer son origine à un lieu précis ou à
                un pays en particulier, même si elle a connu sa plus grande
                diffusion et influence dans les états actuels du Pérou et
                d'Équateur.
              </p>
              <p className="card-text">
                <small class="text-muted">Last updated x mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Third card */}
      <div className="row p-3">
        <div className="col">
          <div className="card mb-3 card-horizontal">
            <img className="card-img-top" src={anaconda} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Anaconda</h5>
              <p className="card-text text-justify">
                Il est originaire des jungles péruviennes et c'est une danse.
                L'anaconda est un serpent d'eau qui vit et pousse dans le fleuve
                Amazone. Les Indiens Chipibos de cette région caractérisent leur
                danse pour représenter leur respect, leur peur et leur devoir
                avec cet animal considéré comme presque mythique.C'est une danse
                typique de caractère mythique ou magico-religieux et de contenu
                de la région amazonienne typique du Shipibo indigène.
              </p>
              <p className="card-text">
                <small class="text-muted">Last updated x mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
