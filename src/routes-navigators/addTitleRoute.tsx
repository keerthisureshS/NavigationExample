import React  from 'react';
import { DetailScreen } from "../screens/DetailScreen"

export const addTitleRoute = (Stack : any) => {
    return(
        <Stack.Screen 
                name='DetailScreen' 
                component={DetailScreen}
                options={({route})=>({
                    headerTitle: `${route.params.TitleName.toUpperCase()}: screen`
                })}
            />
    )
}