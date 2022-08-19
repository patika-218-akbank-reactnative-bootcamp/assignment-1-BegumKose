import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView >
        <Header />
        <Stories />
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: 'white',
      flex: 1,
    },

  }
)

export default HomeScreen;
