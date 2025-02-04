import { ContainerTechnology, ContainerSkill, StyleTitle,Divider } from "./style";

export default function Technology() {
  return (
    <>
      <ContainerTechnology>
        <ContainerSkill>
          <img src="./react.svg" alt="react" />
          <StyleTitle>React</StyleTitle>
        </ContainerSkill>
        <ContainerSkill>
          <img src="./react.svg" alt="next" />
          <StyleTitle>Next.js</StyleTitle>
        </ContainerSkill>
        <ContainerSkill>
          <img src="typescript.svg" alt="typescript" />
          <StyleTitle>TypeScript</StyleTitle>
        </ContainerSkill>
      </ContainerTechnology>
      <Divider></Divider>
    </>
  );
}
