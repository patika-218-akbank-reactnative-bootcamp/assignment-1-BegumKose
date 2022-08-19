import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
    return (
        
        <View style={styles.container}>
         
          <TouchableOpacity>
            <Image 
               style={styles.logo}
               source={require('../../assets/Instagram-Logo.png')}
            />
          </TouchableOpacity>

          <View style= {styles.iconContainer}>
            <TouchableOpacity>
                <Image source={{
                    uri:'https://cdn-icons-png.flaticon.com/512/875/875068.png'
                }} 
                style={styles.plusIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={{
                    uri:'https://cdn-icons-png.flaticon.com/512/8215/8215609.png'
                }} 
                style={styles.likeIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <View style= {styles.messageIcon}>
                    <Text style={styles.messageTextIcon}>17</Text>
                </View>
                <Image source={{
                    uri:'https://cdn-icons-png.flaticon.com/512/2089/2089157.png'
                }} 
                style={styles.dmIcon}
                />
            </TouchableOpacity>

          </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconContainer:{
        flexDirection: 'row',
    },

    plusIcon: {
        width: 27,
        height: 27,
        marginLeft:-100,
        resizeMode: 'contain',
    },

    likeIcon: {
        width: 33,
        height: 33,
        marginLeft:-57,
        resizeMode: 'contain',
    },

    dmIcon: {
        width: 26,
        height: 26,
        marginLeft:-10,
        resizeMode: 'contain',
    },

    logo:
    {
        width: 110,
        height: 70,
        resizeMode: 'contain',
    },

    messageIcon: {
        backgroundColor :'#ff3250',
        position: 'absolute',
        left: 5,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },

    messageTextIcon: {
        color:'white',
        fontWeight: '600',

    },
})

export default Header
