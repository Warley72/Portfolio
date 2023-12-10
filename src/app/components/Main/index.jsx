import React from 'react';

import "../Main/style.sass";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <main>
        <div  className="container-image">
          <Image
            className="image-perfil"
            src="/perfil.svg"
            width={500}
            height={500}
            priority
          />
        </div>
        <section className="container-presentation">
          <div className="helloWorld">
            <Image
              className="image-mao"
              src="/mao.svg"
              width={40}
              height={40}
              priority
            />
            <h1>Carlos Warley</h1>
          </div>
          <h2 className="text-profissao">Software engineer | React-native</h2>
          <p className="text">
            Lorem ipsum dolor sit amet. Et autem maiores qui pariatur amet est
            labore fugiat non mollitia quis. Et voluptates facere in
            consequuntur magnam qui deleniti impedit in voluptatibus fugit.
            Lorem ipsum dolor sit amet. Et autem maiores qui pariatur amet est
            labore fugiat non mollitia quis. Et voluptates facere in
            consequuntur magnam qui deleniti impedit in voluptatibus fugit.
            Lorem ipsum dolor sit amet. Et autem maiores qui pariatur amet est
            labore fugiat non mollitia quis. Et voluptates facere in
            consequuntur magnam qui deleniti impedit in voluptatibus fugit.
          </p>
          <div className="buttons">
            <div className="content-button-git-hub">
              <Image
                className="image-git-hub"
                src="/github.svg"
                width={40}
                height={40}
                priority
              />
              <button className="button-gitHub">
                <a href="https://github.com/Warley72" target="_blank">Git-Hub</a>
              </button>
            </div>
            <div className="content-button-linkedin">
              <Image
                className="image-git-hub"
                src="/linkedin.svg"
                width={40}
                height={40}
                priority
              />
              <button className="button-linkedin">
                <a href="https://www.linkedin.com/in/carlos-warley/" target="_blank">LinkEdin</a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
