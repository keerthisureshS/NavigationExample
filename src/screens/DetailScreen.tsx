import React, { FunctionComponent } from 'react';
import { Center } from '../components/Center';
import { Text } from 'react-native';
import {  RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../navigator-params/HomStackParamList';

interface DetailScreenProps {
    route:RouteProp<HomeStackParamList, 'DetailScreen'>
}
export const DetailScreen: FunctionComponent<DetailScreenProps>= ({route}) => {
    return(
        <Center>
            <Text>
                {route.params.TitleName} : details
            </Text>
        </Center>
    )
}