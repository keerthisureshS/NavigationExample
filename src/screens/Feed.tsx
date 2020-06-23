import React, { useContext, FunctionComponent } from 'react'
import { Center } from '../components/Center'
import { Text, Button, FlatList } from 'react-native'
import { HomeStackParamList } from '../navigator-params/HomStackParamList'
import { StackNavigationProp } from '@react-navigation/stack'

interface FeedProps {
    navigation:StackNavigationProp<HomeStackParamList,'Feed'>
}
export const Feed:FunctionComponent<FeedProps>= ({navigation}) => {
    return (
        <Center>
           <FlatList 
            style={{width:'100%'}}
            renderItem={({item})=>(
                <Button title={item} onPress={()=>{
                    navigation.navigate('DetailScreen',{
                        TitleName:item
                    })
                }}/>
            )}
            keyExtractor={(product,index)=>`${product}${index}`}
            data={Array.from(Array(50),(_,index)=>`title-${index}`)}
           />    
        </Center>
    )
}