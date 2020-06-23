import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamsList } from '../navigator-params/AuthParamsList';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamsList>()

export const AuthStack:FunctionComponent<AuthStackProps> = ({ }) => (
    <Stack.Navigator>
        <Stack.Screen
            name='Login'
            component={Login}
            options={{
                headerTitle: 'Login In'
            }}
        />
        <Stack.Screen
            name='Register'
            component={Register}
            options={{
                header: () => null
            }}
        />
    </Stack.Navigator>
)