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
            Lorem ipsum dolor sit amet. Et autem maiores qui pariatur amet est
            labore fugiat non mollitia quis. Et voluptates facere in
            consequuntur magnam qui deleniti impedit.
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
            Lorem ipsum dolor sit amet. Et autem maiores qui pariatur amet est
            labore fugiat non mollitia quis. Et voluptates facere in
            consequuntur magnam qui deleniti impedit.
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
            Lorem ipsum dolor sit amet. Et autem maiores qui pariatur amet est
            labore fugiat non mollitia quis. Et voluptates facere in
            consequuntur magnam qui deleniti impedit.
          </p>
          <a className="card-btn" href="">
            Ver projeto
          </a>
        </div>
      </div>
    </>
  );
}
