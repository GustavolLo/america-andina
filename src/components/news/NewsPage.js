import React from "react";
import diablada from "../../images/diablada.jpg";

export default function NewsPage() {
  return (
    <div>
      <h1>Actualités</h1>
      <span>
        América Andina réalise une vidéo pour le Festival de folklore
        latino-américain.
      </span>
      <p>
        Le groupe sort de nouveaux costumes et danseurs, il veut capter
        l'attention de tout le public avec de beaux costumes qui représentent
        des démons colorés.
      </p>
      <img src={diablada} alt="Dance Diablada" />
    </div>
  );
}
