import styled from "styled-components";

export const ContainerIntroduction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 80px 120px;

@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin: 40px 40px;
  }
`
export const ContainerMainImage = styled.div`
    flex: 1;
    display: flex;
    border: 3px solid #23C16B;
    border-radius: 20%;
    height: 360px;
`
export const MainImage = styled.div`
    background-image: url("/foto.webp");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10%;
    width: 100%;
    max-width: auto;
    height: 500px;
`
export const ContainerPresentation = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`
export const ContainerHelloWorld = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`
export const StyleTextHelloWorld = styled.div`
    font-size: clamp(26px, 2.5vw, 40px);
    color: #23C16B;
`
export const ContainerAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin: 0px 15px;
  }
`
export const StyleTitle = styled.h1`
    font-size: clamp(24px, 2.5vw, 40px);
`
export const StyleText = styled.p`
    font-size: clamp(18px, 2.5vw, 24px);
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 10px;
  }
`
