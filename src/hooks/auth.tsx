import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import { UsuarioDTO } from "../dtos/UsuarioDTO";
import  api  from '../services/api';
import { AuthContext } from '../contexts/AuthContext';

interface AuthProviderProps{
    children: ReactNode
}

// const URL_ACESSO_IAS = 'http://192.168.10.40:91';
// const CLIENT_ID = '3f3f15d0-7231-4407-ac94-391e7fa33b2b';
// const RESPONSE_TYPE = 'code';
// const REDIRECT_URI = 'exp://192.168.10.246:19000';
// const USUARIO_KEY_STORAGE = '@pokedex:usuario';

const URL_ACESSO_IAS = 'http://ias.interfocus.com.br';
const CLIENT_ID = '1a03e93e-1076-4632-b6f2-87fdc613e837';
const RESPONSE_TYPE = 'code';
const REDIRECT_URI = 'exp://192.168.1.111:19000';
const USUARIO_KEY_STORAGE = '@pokedex:usuario';

function AuthProvider({ children }: AuthProviderProps){
    const [usuario, setUsuario] = useState<UsuarioDTO | null>(null);
    const [loadingBuscaUsuario, setLoadingBuscaUsuario] = useState(true);    

    async function getDadosCode(code: string): Promise<UsuarioDTO | null> {
        const respostaCode = await api.post<UsuarioDTO>('/api/token', {
            code,
            grant_type: "authorization_code"
        },
        {
            // baseURL: 'http://192.168.10.40:92'
            baseURL: 'http://iasapi-beta-1.sa-east-1.elasticbeanstalk.com'
        });      

        return respostaCode.data && respostaCode.data.usuarioId !== 0 ? respostaCode.data : null;
    }

    async function autenticarComIAS () {
        try {           
            let result = await WebBrowser.openAuthSessionAsync(   
                `${URL_ACESSO_IAS}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`, REDIRECT_URI
            );            

            let redirectData;         
            if (result.type === 'success') {
                redirectData = Linking.parse(result.url); 

                const retornoOAuth = await getDadosCode(redirectData.queryParams["code"]);
                if(retornoOAuth){                                        
                    setUsuario(retornoOAuth);
                    await AsyncStorage.setItem(USUARIO_KEY_STORAGE, JSON.stringify(retornoOAuth));                    
                }
            }          
            
        } catch (error) {                
          
        }
      };  

    async function logoff(){       
        setUsuario(null);
        await AsyncStorage.removeItem(USUARIO_KEY_STORAGE);
    }

    useEffect(() => {
        async function consultaUsuarioArmazenado(){
            const usuarioAutenticado = await AsyncStorage.getItem(USUARIO_KEY_STORAGE);            
            if(usuarioAutenticado){
                const usuarioParse = JSON.parse(usuarioAutenticado) as UsuarioDTO;                      
                setUsuario(usuarioParse);
            }
            setLoadingBuscaUsuario(false);
        }

        consultaUsuarioArmazenado();
    },[]);

    return (
        <AuthContext.Provider value={{
            usuario,            
            logoff,
            autenticarComIAS,
            loadingBuscaUsuario            
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth()
{
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }