import React from "react";
import { Image } from "react-native";
import { useAuth } from "../../hooks/auth";
import { BackgroundImage, Botao, Container, Conteudo, Header, Label, Titulo } from "./styles";

function Perfil(){

    const {usuario, logoff} = useAuth();

    return (
        <Container>
            <Header>
                <Titulo>Perfil</Titulo>
            </Header>

            <Conteudo>
                <BackgroundImage>
                    <Image 
                        source={{uri: 'https://avatars.githubusercontent.com/u/48105194?v=4'}}
                        style={{
                            width: 130,
                            height: 130,
                            borderRadius: 65
                        }}
                    />
                </BackgroundImage>
                <Titulo>{usuario?.usuarioNome}</Titulo>
                <Botao onPress={() => logoff()}>
                    <Label>Sair</Label>
                </Botao>
            </Conteudo>
        </Container>
    )
}

export default Perfil;