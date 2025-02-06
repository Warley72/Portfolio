import { ContainerButtonLinkedin, StyleButtonLinkedin } from "./style"

export default function ButtonLinkedin() {
    return(
        <ContainerButtonLinkedin>
            <img src="./linkedin.svg" alt="buttonLinkedin" />
            <StyleButtonLinkedin onClick={() => window.open("https://www.linkedin.com/in/carlos-warley/", "_blank")}>Linkedin</StyleButtonLinkedin>
        </ContainerButtonLinkedin>
    )
}