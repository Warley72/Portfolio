import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0px 120px;
    height: 250px;
    background-color: #2B2B2B;
    color: #23C16B;

    img {
        width: 50px;
        height: auto;
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            width: 30px;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0px 20px;
  }
`
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`
export const ContaneirNetwork = styled.div`
    display: flex;
    justify-content: space-between;

@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px;
  }
`
export const ContainerMidia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const ContainerDesign = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    img {
        width: 200px;
        height: auto;
    }
`
export const StyleText = styled.a`
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out; 

    &:hover {
        color: #086B35;
    }
`
export const StyleContact = styled.p`
    font-size: 40px;
`