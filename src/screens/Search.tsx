import React, { useState, FunctionComponent } from 'react';
import { Center } from '../components/Center';
import { Text, Button, FlatList,StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SearchStackParamList } from '../navigator-params/SearchParamsList';

interface SearchProps{
    navigation:StackNavigationProp<SearchStackParamList,'Search'>
}

export const Search:FunctionComponent<SearchProps> = ({navigation}) => {
    const [ showTitles, setShowTitle] = useState(false)
    return (
        <Center>
            <Button title='Search title' onPress={()=>setShowTitle(!showTitles)}/>
            {
                showTitles?
                    <FlatList 
                        style={styles.listStyles}
                        renderItem={({item})=>(
                            <Button title={item} onPress={()=>{ navigation.navigate('DetailScreen',{
                                TitleName:item
                            })}}/>
                        )}
                        keyExtractor={(product,index)=>`${product}${index}`}
                        data={Array.from(Array(50),(_,index)=>`title to search -${index}`)}
                    /> :
                <Text>Click above text</Text>
            }
           
        </Center>
    )
}
const styles = StyleSheet.create({
    listStyles : {
        width:'100%'
    }
})