import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import PostOption from '../components/home/postBottom';
import PostHeader from '../components/home/postHeader';
import PostImage from '../components/home/Posts';
import Stories from '../components/home/Stories';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView >
        <Header />
        <Stories />
        <PostHeader />
        <PostImage />
        <PostOption />

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
