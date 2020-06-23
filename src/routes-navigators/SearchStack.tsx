import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Search } from '../screens/Search';
import { SearchStackParamList } from '../navigator-params/SearchParamsList';
import { addTitleRoute } from './addTitleRoute';

interface SearchStackProps{}

const Stack = createStackNavigator<SearchStackParamList>()

export const SearchStack = ({})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search}/>
            {addTitleRoute(Stack)}
        </Stack.Navigator>
    )
}