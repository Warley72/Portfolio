import { ContainerProjets, ContainerProjet, ContainerImageProjet, ContainerTextProjet, ImageProjet, TitleProjet } from "./style"

export default function Projects() {
    return(
        <ContainerProjets>
            <ContainerProjet>
                <ContainerImageProjet>
                    <ImageProjet></ImageProjet>
                </ContainerImageProjet>
                <ContainerTextProjet>
                    <TitleProjet>Projeto</TitleProjet>
                    <p>
                        Lorem ipsum dolor sit amet.
                        Et autem maiores qui pariatur amet est labore fugiat non mollitia quis. 
                        Et voluptates facere in consequuntur magnam qui deleniti impedit.
                    </p>
                </ContainerTextProjet>
            </ContainerProjet>

            <ContainerProjet>
                <ContainerImageProjet>
                    <ImageProjet></ImageProjet>
                </ContainerImageProjet>
                <ContainerTextProjet>
                    <TitleProjet>Projeto</TitleProjet>
                    <p>
                        Lorem ipsum dolor sit amet.
                        Et autem maiores qui pariatur amet est labore fugiat non mollitia quis. 
                        Et voluptates facere in consequuntur magnam qui deleniti impedit.
                    </p>
                </ContainerTextProjet>
            </ContainerProjet>

            <ContainerProjet>
                <ContainerImageProjet>
                    <ImageProjet></ImageProjet>
                </ContainerImageProjet>
                <ContainerTextProjet>
                    <TitleProjet>Projeto</TitleProjet>
                    <p>
                        Lorem ipsum dolor sit amet.
                        Et autem maiores qui pariatur amet est labore fugiat non mollitia quis. 
                        Et voluptates facere in consequuntur magnam qui deleniti impedit.
                    </p>
                </ContainerTextProjet>
            </ContainerProjet>
        </ContainerProjets>
    )
}