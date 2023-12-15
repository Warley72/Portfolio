import React from "react";

import Image from "next/image";
import "../Worlks/style.sass";

export default function Worlks() {
  return (
    <>
      <div className="container-main">
        <div className="card-container">
          <Image
            className="card-img"
            src="/imageCard.svg"
            alt="Logo"
            width={80}
            height={224}
            priority
          />
          <h1 className="card-title">Projeto</h1>
          <p className="card-description">
            É com grande entusiasmo que compartilhamos um do meus projetos
            desenvolvido.
          </p>
          <a className="card-btn" href="">
            Ver projeto
          </a>
        </div>

        <div className="card-container">
          <Image
            className="card-img"
            src="/imageCard.svg"
            alt="Logo"
            width={80}
            height={224}
            priority
          />
          <h1 className="card-title">Projeto</h1>
          <p className="card-description">
            É com grande entusiasmo que compartilhamos um do meus projetos
            desenvolvido.
          </p>
          <a className="card-btn" href="">
            Ver projeto
          </a>
        </div>

        <div className="card-container">
          <Image
            className="card-img"
            src="/imageCard.svg"
            alt="Logo"
            width={100}
            height={224}
            priority
          />
          <h1 className="card-title">Projeto</h1>
          <p className="card-description">
            É com grande entusiasmo que compartilho um do meus projetos
            desenvolvido.
          </p>
          <a className="card-btn" href="">
            Ver projeto
          </a>
        </div>
      </div>
    </>
  );
}
