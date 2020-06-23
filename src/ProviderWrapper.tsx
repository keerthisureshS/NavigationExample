import React, { FunctionComponent } from 'react';
import { AuthProvider } from './providers/AuthProvider';
import { Routes } from './routes-navigators/Routes';

interface ProviderProps {

}

export const ProviderWrapper:FunctionComponent<ProviderProps>=({})=>{
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}