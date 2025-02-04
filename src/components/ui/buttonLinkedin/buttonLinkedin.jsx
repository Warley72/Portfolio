import { ContainerButtonLinkedin, StyleButtonLinkedin } from "./style"

export default function ButtonLinkedin() {
    return(
        <ContainerButtonLinkedin>
            <img src="./linkedin.svg" alt="buttonLinkedin" />
            <StyleButtonLinkedin><a target="_blank" href="https://www.linkedin.com/in/carlos-warley/">Linkedin</a></StyleButtonLinkedin>
        </ContainerButtonLinkedin>
    )
}