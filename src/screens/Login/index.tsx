import React from 'react';
import PokebolaLogin from '../../assets/PokebolaLogin.svg';
import { Autenticar, Container, Label } from './styles';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { UsuarioDTO } from '../../dtos/UsuarioDTO';
import api from '../../services/api';

const URL_ACESSO_IAS = 'http://192.168.10.40:91';
const CLIENT_ID = '3f3f15d0-7231-4407-ac94-391e7fa33b2b';
const RESPONSE_TYPE = 'code';
const REDIRECT_URI = 'exp://192.168.10.246:19000';

function Login(){

    async function getDadosCode(code: string): Promise<UsuarioDTO | null> {
        const respostaCode = await api.post<UsuarioDTO>('/api/token', {
            code,
            grant_type: "authorization_code"
        },
        {
            baseURL: 'http://192.168.10.40:92'
        });      

        return respostaCode.data && respostaCode.data.usuarioId !== 0 ? respostaCode.data : null;
    }

    async function autenticarComIAS () {
        try {            
            //console.log('AAAAAA', Constants)
            //?url=http%3A%2F%2F192.168.10.246%3A8081            

            let result = await WebBrowser.openAuthSessionAsync(   
                `${URL_ACESSO_IAS}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`, REDIRECT_URI
            );

            console.log('...',result )

            let redirectData;         
            if (result.type === 'success') {
                redirectData = Linking.parse(result.url); 

                const retornoOAuth = await getDadosCode(redirectData.queryParams["code"]);
                if(retornoOAuth){
                    console.log(retornoOAuth);
                }
            }
        } catch (error) {                
          console.log(error)
        }
      };  

    return (
        <Container 
            colors={['#133ABC','#5EBCFC']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1}}
        >
            <PokebolaLogin />
            <Autenticar onPress={() => autenticarComIAS()}>
                <Label>Autenticar com o IAS</Label>
            </Autenticar>
        </Container>
    )
}

export default Login;