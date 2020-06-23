import React,{ FunctionComponent, useContext } from 'react';
import { Center } from '../components/Center';
import {Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamsList } from '../navigator-params/AuthParamsList';
import { AuthContext } from '../providers/AuthProvider';



interface LoginProps{
    navigation:StackNavigationProp<AuthParamsList,'Login'>
}

export const Login:FunctionComponent<LoginProps> =({navigation})=>{
    const { login } = useContext(AuthContext)
    return (
        <Center>
            <Text>Login screen</Text>
            <Button title='Log me in' onPress={()=>login()}/>
            <Button title='Go to register' onPress={()=>navigation.navigate('Register')}/>
        </Center>
    )
}