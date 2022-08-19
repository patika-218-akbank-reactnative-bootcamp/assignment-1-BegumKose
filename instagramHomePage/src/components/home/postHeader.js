import React from 'react';
import { View,Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Divider} from 'react-native-elements'

const PostHeader = () => (
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
                        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zUCBzJZ3yGTaSFKzCwtlpVE7hW-BaLJ79Q&usqp=CAU'
                    }} 
                    style = {styles.postProfile} />
                <Text style={{color: 'black', fontSize: 15, marginLeft: 8.5, fontWeight: 'bold'}}>phoebeBuffay</Text>
                <Text style= {{ marginLeft: 200 ,color: 'black', fontWeight: '900'}}>...</Text>
            </View>
            
        </TouchableOpacity>
    </View>

)

const styles= StyleSheet.create({

    postProfile:{
        marginLeft: 13.5,
        height: 44,
        width:44,
        flexDirection: 'row',
        padding: 8, 
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor : '#ff1493',
    },

})

export default PostHeader