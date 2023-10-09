/* eslint-disable */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ElevatedCards() {
  return (
    <>
      <Text style={styles.HeadingStyle}>Elevated Cards</Text>
    <ScrollView horizontal={true} style={styles.container}>

      <View style={[styles.card, styles.cardOne]}>
        <Text> Scroll</Text>
      </View>

      <View style={[styles.card, styles.cardOne]}>
        <Text> Scroll</Text>
      </View>

      <View style={[styles.card, styles.cardOne]}>
        <Text> Scroll</Text>
      </View>

      <View style={[styles.card, styles.cardOne]}>
        <Text> Scroll</Text>
      </View>

      <View style={[styles.card, styles.cardOne]}>
        <Text> Scroll</Text>
      </View>

      <View style={[styles.card, styles.cardOne]}>
        <Text> Scroll</Text>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 18,
    height: '100%',
    
    // marginHorizontal:10
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:8,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'black',
    shadowRadius:2,
    shadowOpacity:12
  },
  textColor: {
    color: 'black',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  HeadingStyle:{
    fontSize:24,
    fontWeight:"bold",
    color:"blue",
    letterSpacing:2,
    padding:10
   
},
});

export default ElevatedCards;
