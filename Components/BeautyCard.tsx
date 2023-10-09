/*eslint-disable*/


import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'


function BeautyCard(){
    return(
        <>

        <View style={styles.container}>

            <Text style={styles.TextDesign}>Beauty Card</Text>

            <View>
                <Image source={{
                    uri:'https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                }} style={styles.CardImage}/>

                <Text> JaiPur </Text>
            </View>

            <View>
                <Image source={{
                    uri:'https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                }} style={styles.CardImage}/>

                <Text> JaiPur </Text>
            </View>
        </View>

        
        
        </>
    )
}

const styles = StyleSheet.create({
    container:{},
    TextDesign:{},
    CardImage:{
        height:300,
        width:1000
    }
})


export default BeautyCard