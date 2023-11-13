import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Title(props) {
  return (
    <View style={
        [styles.titleContainer, 
        {paddingVertical:props.verticalPadding,
        borderColor:props.color}]
    }>
        <Text style={[styles.titleText, {color:props.color}]}>{props.title}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    titleContainer:{
        alignItems:'center',
        borderWidth:4,
        borderRadius:16,
        paddingHorizontal:16,
        marginBottom:16,

    },
    titleText:{
        fontSize:32,
        fontWeight:'bold',
    }
})