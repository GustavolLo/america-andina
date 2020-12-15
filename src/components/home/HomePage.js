import React from "react";
import "./HomePage.css";
import criolla from "../../images/diaCancionCriolla.jpg";
import macchuPisko from "../../images/huaca.jpg";

export default function HomePage() {
  return (
    <div>
      <div
        id="carouselIdentifier"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIdentifier"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselIdentifier" data-slide-to="1"></li>
          <li data-target="#carouselIdentifier" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item bg-cover active"></div>
          <div className="carousel-item bg-cover"></div>
          <div className="carousel-item bg-cover"></div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselIdentifier"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselIdentifier"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container my-5">
        <h1 className="display-2 py-5">América Andina</h1>
        <div className="row py-5">
          <img
            src={criolla}
            className="col col-md-7 img-fluid rounded-lg"
            alt="Musica Criolla"
          />
          <div className="col col-md-1"></div>
          <p className="text-justify col col-md-4">
            L'association América Andina se consacre à la transmission et au
            partage du grand Diversité sud-américaine et richesse culturelle,
            exploration et recherche tous les arts traditionnels, tels que la
            danse, la musique, Gastronomie et artisanat. América Andina est un
            groupe de danses et de musique traditionnelles.
            <br />
            <br /> C'est avec des années de travail et de nombreux efforts que
            nous avons réussi à construire. Cet objectif ne peut être atteint
            qu'avec humilité et apprentissage. Partage et amélioration de jour
            en jour grâce à tous les amis et membres qui croient en nous. La
            volonté peut tout faire et nous sommes heureux de permettre à tant
            de gens de rêver de notre riche culture. Parce que de la France au
            monde nous continuons notre route.
          </p>
        </div>
        <h1 className="display-2 pt-5">Elenco</h1>
        <div className="row py-5">
          <p className="text-justify col col-md-4">
            Faire partie de la distribution América Andina est une belle
            expérience pleine de surprises et émotions. Voyager, danser, rire,
            rencontrer de nouvelles personnes Et de nouvelles danses, avoir une
            deuxième famille, libérer le côté artistique que nous avons chacun
            dans notre cœur, pour être les ambassadeurs de Notre culture!!!{" "}
            <br /> <br />
            Les meilleures histoires sont celles que vous vivez, pas les qui
            sont comptés. Venez vivre votre propre histoire avec l'Amérique
            andine.
          </p>
          <div className="col col-md-1"></div>
          <img
            src={macchuPisko}
            className="col col-md-7 img-fluid rounded-lg"
            alt="Musica Criolla"
          />
        </div>
      </div>
    </div>
  );
}
