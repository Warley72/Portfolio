import ButtonGitHub from "../../ui/buttonGitHub/buttonGitHub"
import ButtonLinkedin from "../../ui/buttonLinkedin/buttonLinkedin"

import { 
    ContainerIntroduction, ContainerMainImage, 
    ContainerPresentation, ContainerHelloWorld,
    ContainerAbout, StyleTitle,StyleText,
    ContainerButtons,
} from "./style"

export default function Introduction() {
    return(
        <ContainerIntroduction>
            <ContainerMainImage>
                
            </ContainerMainImage>
            <ContainerPresentation>
                <ContainerHelloWorld>
                    <img src="./mao.svg"/>
                    <img src="./helloWorld.svg"/>
                </ContainerHelloWorld>
                <ContainerAbout>
                    <StyleTitle>Software engineer | Front-end</StyleTitle>
                    <StyleText>
                        Lorem ipsum dolor sit amet. Et autem maiores qui pariatur 
                        amet est labore fugiat non mollitia quis. Et voluptates 
                        facere in consequuntur magnam qui deleniti impedit in voluptatibus
                         fugit et iste aliquid aut distinctio accusamus. Et laboriosam repellat
                        eos quis magnam ad quia commodi!
                    </StyleText>
                </ContainerAbout>
                <ContainerButtons>
                    <ButtonGitHub />
                    <ButtonLinkedin />
                </ContainerButtons>
            </ContainerPresentation>
        </ContainerIntroduction>
    )
}