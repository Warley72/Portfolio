import styled from "styled-components";

export const ContainerTechnology = styled.div`
    display: flex;
    justify-content: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 150px;
    margin: 0px 120px;
    margin-bottom: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 50px;
    margin: 40px 40px;
  }
`
export const ContainerSkill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const StyleTitle = styled.p`
    font-size: 25px;
`
