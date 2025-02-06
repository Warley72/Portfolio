import styled from "styled-components";

export const ContainerButtonGitHub = styled.div`
    display: flex;
    gap: 10px;
`
export const StyleButtonGitHub = styled.button`
    background-color: transparent;
    border-color: #23C16B;
    border-radius: 20px;
    font-size: 16px;
    padding: 10px 30px;
    cursor: pointer;
    color: #E1E1E1;
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