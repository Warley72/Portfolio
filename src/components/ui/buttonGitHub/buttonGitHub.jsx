import { ContainerButtonGitHub, StyleButtonGitHub,} from "./style"

export default function ButtonGitHub() {
    return(
        <ContainerButtonGitHub>
            <img src="./github.svg" alt="buttonGitHub" />
            <StyleButtonGitHub><a target="_blank" href="https://github.com/Warley72">Git-Hub</a></StyleButtonGitHub>
        </ContainerButtonGitHub>
    )
}