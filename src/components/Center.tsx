import React, { FunctionComponent } from 'react';
import { View,StyleSheet } from 'react-native';

interface CenterProps {

}

export const Center:FunctionComponent<CenterProps>=({children})=>{
    return (
        <View style={styles.center}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
