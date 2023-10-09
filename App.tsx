import React from 'react';
import {View, SafeAreaView, Text,StyleSheet,useColorScheme} from 'react-native';

function App():JSX.Element {

  const isDarkMode = useColorScheme() === 'dark'
  
  
  return (
    <SafeAreaView>
      <View>
        <Text style={Style.container}>
          How is Life ?
        </Text>

        {/* <Text style={isDarkMode ? Style.darkMode : Style.lightMode }> Hello My Name is Shubham</Text> */}
      </View>
    </SafeAreaView>
  );
}


const Style = StyleSheet.create({


  // there can be many option 

  container:{
    flex:2,
    alignItems:'flex-end',
    height:'100%'
    
  }
  ,
  darkMode:{
    color:'yellow'
  },
  lightMode:{
    color:'red'
  }


})

export default App;
