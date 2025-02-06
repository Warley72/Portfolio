import { ContainerButtonGitHub, StyleButtonGitHub,} from "./style"

export default function ButtonGitHub() {
    return(
        <ContainerButtonGitHub>
            <img src="./github.svg" alt="buttonGitHub" />
            <StyleButtonGitHub onClick={() => window.open("https://github.com/Warley72", "_blank")}>GitHub</StyleButtonGitHub>
        </ContainerButtonGitHub>
    )
}