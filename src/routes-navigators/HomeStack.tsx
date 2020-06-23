import React, { FunctionComponent, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigator-params/HomStackParamList';
import { Feed } from '../screens/Feed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../providers/AuthProvider';
import { Text } from 'react-native';
import { addTitleRoute } from './addTitleRoute';

interface HomeSatckProps{}

const Stack = createStackNavigator<HomeStackParamList>()

export const HomeStack: FunctionComponent<HomeSatckProps> = ({}) => {
    const { logout } = useContext(AuthContext)
    return(
        <Stack.Navigator 
            screenOptions={{
                headerRight:()=>(
                    <TouchableOpacity onPress={logout}>
                       <Text> Logout </Text>
                    </TouchableOpacity>
                )
            }}
        >
            <Stack.Screen name='Feed' component={Feed}/>
            {addTitleRoute(Stack)}
        </Stack.Navigator>
    )
}