import React from 'react';
import { View,Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Divider} from 'react-native-elements'

const Likes = () => (
    <View style={{
        display : 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 3.5,
        alignItems: 'center',
       }}>
        <TouchableOpacity>
            <View style={{ 
                display : 'flex',
                flexDirection:'row',
                alignItems: 'center',}}>
                
                    <Image source={{
                            uri:'https://i.pinimg.com/736x/7f/3a/8d/7f3a8d5db6a8f9d9dbd52c430bbc1f2b.jpg'
                        }} 
                        style={styles.iconContainer2}
                        />
                    <Text style={{color: 'black', fontSize: 11, textAlign:'center', marginLeft: 4, fontWeight: 'bold'}}>chandlerBing and other people liked</Text>
                    
            </View>
        </TouchableOpacity>
        
    </View>

)

const styles= StyleSheet.create({

    iconContainer2:{
        marginLeft: 8,
        height: 30,
        width:30,
        flexDirection: 'row',
        padding: 8, 
        borderRadius: 50,
        
    },
})

export default Likes