import styled from "styled-components";

export const ContainerProjets = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    margin: 80px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin: 40px 40px;
  }
`
export const ContainerProjet = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 350px;
    background-color: #3B3B3B;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out; 

    &:hover {
        transform: translateY(-5px); 
    }
`
export const ContainerImageProjet = styled.div`
    display: flex;
`
export const ImageProjet = styled.div`
    background-image: url("/fundoProjet.svg");
    width: 100%;
    max-width: 350px;
    height: 220px;
    border-radius: 20px;
`
export const TitleProjet = styled.p`
    font-size: 25px;
    margin-bottom: 20px;
    color: #23C16B;
`
export const ContainerTextProjet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 30px 50px;
`