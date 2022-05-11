import { createContext } from 'react';
import { UsuarioDTO } from '../dtos/UsuarioDTO';

interface IAuthContext{
    usuario: UsuarioDTO | null;       
    logoff(): Promise<void>;
    autenticarComIAS(): Promise<void>;
    loadingBuscaUsuario: boolean;    
}


export const AuthContext = createContext({} as IAuthContext);