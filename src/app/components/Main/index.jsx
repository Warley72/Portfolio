import React from "react";

import "../Main/style.sass";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <main>
        <div className="container-image">
          <Image
            className="image-perfil"
            src="/perfil.svg"
            width={250}
            height={250}
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
          <h2 className="text">Software engineer | React-native</h2>
          <p className="text">
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
                <a href="#">Git-hub</a>
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
                <a href="#">LinkEdin</a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
