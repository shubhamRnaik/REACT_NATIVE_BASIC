/* eslint-disable */

import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';



function FlatCard():JSX.Element{
    return(
   
         
             <View>
            <Text style={styles.HeadingStyle}> FlatCard </Text>
            <View style={styles.container}>
            <ScrollView horizontal>
                <View style={[styles.card,styles.cardOne]}>
                    <Text style={styles.textColor} >RED</Text>
                </View>

                <View style={[styles.card,styles.cardTwo]}>
                    <Text style={styles.textColor} >GREEN</Text>
                </View>

                <View style={[styles.card,styles.cardThree]}>
                    <Text style={styles.textColor} >YelloW</Text>
                </View>

                <View style={[styles.card,styles.cardFour]}>
                    <Text style={styles.textColor} >Blue</Text>
                </View>



                </ScrollView>

            </View>
        </View>
         

    )
}


const styles = StyleSheet.create({
    HeadingStyle:{
        fontSize:24,
        fontWeight:"bold",
        color:"red",
        letterSpacing:2,
       
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:18
        
    },
    card:{
        height:100,
        width:100,
        borderRadius:5,
        margin:8,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        
        

    },

    textColor:{
        color:"black",
        letterSpacing:2,
        fontWeight:'bold'
    },
    cardOne:{
    backgroundColor:"red",
    },

    cardTwo:{
        backgroundColor:"green",

    },

    cardThree:{
        backgroundColor:"yellow",
    },

    cardFour:{
        backgroundColor:"blue",
    }
})

export default FlatCard