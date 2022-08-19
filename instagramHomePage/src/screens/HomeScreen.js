import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/home/Header';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView >
        <Header />
        
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
