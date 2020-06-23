import React, { FunctionComponent, createContext, useState } from 'react';
import { AsyncStorage } from 'react-native';

type User = null | {userName : string}

export const AuthContext = createContext<{
    user:User,
    login:()=>void,
    logout:()=>void
}>({
   user:null,
   login:()=>{},
   logout:()=>{}
});

interface AuthProviderProps{}

export const AuthProvider:FunctionComponent<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>(null)
    return (
        <AuthContext.Provider value={{
            user,
            login:()=>{
                setUser({userName:'keerthi'})
                AsyncStorage.setItem('user',JSON.stringify(user))
            },
            logout:()=>{
                setUser(null)
                AsyncStorage.removeItem('user')
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}