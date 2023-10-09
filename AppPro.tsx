/* eslint-disable */

import React from 'react';
import {SafeAreaView, View, Text, StyleSheet,ScrollView} from 'react-native';
import FlatCard from './Components/FlatCard';
import ElevatedCards from './Components/ElevatedCards';
import BeautyCard from './Components/BeautyCard';
function AppPro(): JSX.Element {
  return (
    <SafeAreaView>
        <ScrollView >
        <FlatCard/>
        <ElevatedCards/>
        <BeautyCard/>
        </ScrollView>
    </SafeAreaView>
  );
}

export default AppPro;
