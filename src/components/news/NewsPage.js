import React from "react";
import "./NewsPage.css";
import amunanti from "../../images/amunanti.jpg";
import diablada from "../../images/diablada.jpg";
// import video from "../../videos/repetition_aa_Trim.mp4";
import repetition from "../../images/repetition_aa_photo.jpg";

export default function NewsPage() {
  return (
    <>
      <div className="jumbotron jumbotron-title">
        <div className="container">
          <h1 className="display-2 my-4 text-white">Actualités</h1>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col col-md-6">
            <div className="card m-5">
              <img
                className="card-img-top"
                src={amunanti}
                alt="Annonce Sur la Route des Andes"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Ateliers enfants gratuits sur Paris
                </h5>
                <p className="card-text text-justify">
                  L'Association America Andina organise des ateliers gratuits
                  pour les enfants dans différents quartiers de Paris. Venez en
                  apprendre un peu plus sur les danses folkloriques d'Amérique
                  latine.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className="row">
              <div className="card m-5">
                {/* <video
                  className="card-img-top"
                  src={video}
                  width="auto"
                  height="auto"
                  controls="controls"
                  autoPlay={false}
                /> */}
                <img
                  src={repetition}
                  className="card-img-top"
                  alt="Repetiion Diablada"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Préparation pour le festival folklorique
                  </h5>
                  <p className="card-text text-justify">
                    América Andina réalise une vidéo pour le Festival de
                    folklore latino-américain. Le groupe sort de nouveaux
                    costumes et danseurs, il veut capter l'attention de tout le
                    public avec de beaux costumes qui représentent des démons
                    colorés.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card m-5">
                <img
                  src={diablada}
                  className="rounded-lg w-100"
                  alt="Dance diablada"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
