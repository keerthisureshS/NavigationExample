import React, { FunctionComponent } from 'react';
import { AntDesign, Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabsParamList } from '../navigator-params/AppTabsParamList';
import { HomeStack } from './HomeStack';
import { Search } from '../screens/Search';
import { SearchStack } from './SearchStack';

interface AppTabsProps{}

const Tabs = createBottomTabNavigator<AppTabsParamList>()

export const AppTabs: FunctionComponent<AppTabsProps> = ({}) => {
    return (
        <Tabs.Navigator
            screenOptions = {({route})=>({
                tabBarIcon:({size,color})=>{
                    if (route.name === 'Home') {
                        return <AntDesign name={'home'} size={size} color={color}/>
                    } else if (route.name === 'Search') {
                        return <Feather name={"search"} size={size} color={color} />
                    }
                }
               
            })}
            tabBarOptions = {{
                activeTintColor:'tomato',
                inactiveTintColor:'grey'
            }}
        >
            <Tabs.Screen name='Home' component={HomeStack}/>
            <Tabs.Screen name='Search' component={SearchStack}/>
        </Tabs.Navigator>
    )
}