import React,{ FunctionComponent, useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Center } from '../components/Center';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { AuthContext } from '../providers/AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';

interface RoutesProps {

}

export const Routes:FunctionComponent<RoutesProps> = ({})=>{
    const { user, login } =  useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        AsyncStorage.getItem('user')
        .then(userSring =>{
            if (userSring) {
                login()
                setLoading(false)
            } else {
                setLoading(false)
            }
        })
        .catch(error=>{
            setLoading(false)
        })
    },[])

    if (loading) {
        return(
            <Center>
                <ActivityIndicator size='large'/>
            </Center>
        )
    }
    return (
        <NavigationContainer>
            {
                user ? 
                    <AppTabs />
                :
                    <AuthStack />
            }
        </NavigationContainer>
    )
}