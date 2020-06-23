import React,{ FunctionComponent } from 'react';
import { Center } from '../components/Center';
import {Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamsList } from '../navigator-params/AuthParamsList';

interface RegisterProps{
    navigation:StackNavigationProp<AuthParamsList,'Login'>
}

export const Register:FunctionComponent<RegisterProps>=({navigation})=>(
    <Center>
        <Text>Register</Text>
        <Button title='Go to home' onPress={()=>navigation.navigate('Login')} />
    </Center>
)