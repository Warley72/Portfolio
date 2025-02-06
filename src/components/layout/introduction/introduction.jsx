import React from "react";
import Typewriter from "typewriter-effect";

import ButtonGitHub from "../../ui/buttonGitHub/buttonGitHub";
import ButtonLinkedin from "../../ui/buttonLinkedin/buttonLinkedin";

import {
  ContainerIntroduction,ContainerMainImage,
  ContainerPresentation,ContainerHelloWorld,
  StyleTextHelloWorld,ContainerAbout,
  StyleTitle,StyleText,ContainerButtons,MainImage
} from "./style";

export default function Introduction() {
  return (
    <ContainerIntroduction>
      <ContainerMainImage>
        
      </ContainerMainImage>
      <ContainerPresentation>
        <ContainerHelloWorld>
          <img src="./mao.svg" />
          <StyleTextHelloWorld>
            <Typewriter
              options={{
                strings: ["Hello World!!", "I'am Carlos Warley"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </StyleTextHelloWorld>
        </ContainerHelloWorld>
        <ContainerAbout>
          <StyleTitle>Software engineer | Front-end</StyleTitle>
          <StyleText>
            Meu nome é Carlos Warley, e atualmente estou cursando Análise e Desenvolvimento de Sistemas
            na Universidade Católica de Brasília. Tenho experiência como instrutor de programação na SuperGeeks, 
            onde desenvolvi e apliquei diversas atividades relacionadas ao ensino de tecnologia.
            Meu objetivo é continuar explorando novas tecnologias e compartilhar meu conhecimento para inspirar outras
            pessoas a ingressarem no mundo da programação e do desenvolvimento de software.
          </StyleText>
        </ContainerAbout>
        <ContainerButtons>
          <ButtonGitHub />
          <ButtonLinkedin />
        </ContainerButtons>
      </ContainerPresentation>
    </ContainerIntroduction>
  );
}
