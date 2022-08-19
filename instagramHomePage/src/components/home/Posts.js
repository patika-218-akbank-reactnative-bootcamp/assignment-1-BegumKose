import React from 'react';
import { View,Text, Image, StyleSheet, Dimensions } from 'react-native';
import {Divider} from 'react-native-elements'

const PostImage = () => {
    return (
        <Image source={{
            uri:'https://i.insider.com/55df18389dd7cc0f008b64cc?width=1000&format=jpeg&auto=webp'
        }} 
         style={{ height: Dimensions.get('window').height/2 }}
        />
    );
};

export default PostImage