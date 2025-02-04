import { ContainerFooter,ContainerTitle, ContaneirNetwork, ContainerMidia, ContainerDesign, StyleText, StyleContact } from "./style"

export default function Footer() {
    return(
        <ContainerFooter>
            <ContainerTitle>
                <StyleContact>Contanto</StyleContact>
            </ContainerTitle>
            <ContaneirNetwork>
                <ContainerMidia>
                    <img src="/instagram.svg" alt="instagram" />
                    <StyleText>Warley02</StyleText>
                </ContainerMidia>
                <ContainerMidia>
                    <img src="/email.svg" alt="email" />
                    <StyleText>carloswarley0@gmail.com</StyleText>
                </ContainerMidia>
            </ContaneirNetwork>
            <ContainerDesign>
                <img src="/Design.svg" alt="design" />
            </ContainerDesign>
        </ContainerFooter>
    )
}