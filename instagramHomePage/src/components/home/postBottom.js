import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PostOption = () => {
    return (

        <View style={styles.container}>

          <View style= {styles.iconContainer}>
            <TouchableOpacity>
                <Image source={require('../../assets/like.png')}
                style={styles.likeIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/comment.png')}
                style={styles.commentIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/send.png')}
                style={styles.sendIcon}
                />
            </TouchableOpacity>

          </View>
          <TouchableOpacity><Image source={require('../../assets/save.png')}
                style = {styles.saveIcon} />
            </TouchableOpacity>

            

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 6,
    },

    iconContainer:{
        flexDirection: 'row',
    },

    iconContainer2:{
        marginLeft: 8,
        height: 30,
        width:30,
        flexDirection: 'row',
        padding: 8, 
        borderRadius: 50,
        
    },

    commentIcon: {
        width: 28,
        height: 28,
        marginLeft:4,
        marginVertical: 6.5,
        resizeMode: 'contain',
    },

    likeIcon: {
        width: 30,
        height: 30,
        marginLeft: 6,
        marginVertical: 6.5,
        resizeMode: 'contain',
    },

    sendIcon: {
        width: 25.5,
        height: 25.5,
        marginLeft: 4,
        marginVertical: 8,
        resizeMode: 'contain',
    },

    saveIcon: {
        width: 25.5,
        height: 25.5,
        marginRight: 7,
        marginVertical: 6,
        resizeMode: 'contain',
    },

})

export default PostOption