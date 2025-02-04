import styled from "styled-components";

export const ContainerButtonGitHub = styled.div`
    display: flex;
    gap: 10px;
`
export const StyleButtonGitHub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('./button.svg');
    background-repeat: no-repeat;
    background-color: transparent;
    width: 87px;
    color: #E1E1E1;
    cursor: pointer;
    transition: 1s;

    &:hover {
        color: #23C16B;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    &:visited {
        color: inherit;
    }
`