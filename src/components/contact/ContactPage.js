import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="container">
      <h1 className="display-2 my-5 pt-2">Contactez nous!</h1>
      <div className="row">
        <div className="col">
          <div className="inline">
            <span className="icon facebook"></span>
            <h3 className="display-5">Facebook</h3>
            <a href="https://www.facebook.com/americaandinafr">
              https://www.facebook.com/americaandinafr
            </a>
          </div>
          <div className="inline">
            <span className="icon instagram"></span>
            <h3 className="display-5">Instagram</h3>
            <a
              href="https://www.instagram.com/americaandinafr/?hl=fr"
              rel="noreferrer"
              target="_blank"
            >
              https://www.instagram.com/americaandinafr/?hl=fr
            </a>
          </div>
          <div className="inline">
            <span className="icon gmail"></span>
            <h3>E-mail</h3>
            <a href="mailto: america.andina.fr@gmail.com">
              america.andina.fr@gmail.com
            </a>
          </div>
          <div className="inline">
            <span className="icon whatsapp"></span>
            <h3>Téléphone</h3>
            <a href="tel:+33 6 73 29 22 27">+33 6 73 29 22 27</a>
          </div>
        </div>
      </div>
    </div>
  );
}
