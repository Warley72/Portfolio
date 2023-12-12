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
            <h1>Hello World!</h1>
          </div>
          <h2 className="text-profissao">Software engineer | React-native</h2>
          <p className="text">
            Olá, sou Carlos Warley, um entusiasta da tecnologia. Tenho
            experiência como instrutor e trabalhei na SuperGeeks com
            desenvolvimento de software e jogos. Dentre o conteúdo ensinado,
            incluem-se Robótica com Arduino; Produção de jogos com Construct3 e
            GDevelop (no code); Produção de jogos com C# na Unity; Produção de
            jogos com GDScript no Godot; Introdução à programação com Python;
            Programação web com HTML, CSS e JavaScript. Tenho como hobby a
            criação ocasional de jogos, utilizando a ferramenta Godot 4. Gosto
            de demonstrar minha paixão por explorar diferentes aspectos da
            programação. Destaco-me como desenvolvedor mobile especializado na
            criação de interfaces de sites e apps, com foco em tecnologias como
            TypeScript, React Native e React.
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
                <a
                  className="link-button"
                  href="https://github.com/Warley72"
                  target="_blank"
                >
                  Git-Hub
                </a>
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
                <a
                  className="link-button"
                  href="https://www.linkedin.com/in/carlos-warley/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
