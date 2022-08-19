import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
    
const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollView} >
                <TouchableOpacity>
                <Image source={{
                        uri:'https://livetobloom.com/wp-content/uploads/2019/10/monica-friends-1000x563.jpg'
                    }} 
                    style={styles.iconContainer1}
                    />
                    <Text style={{color: 'black', fontSize: 11, textAlign:'center'}}>monicaGeller</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={{
                        uri:'https://i.pinimg.com/736x/7f/3a/8d/7f3a8d5db6a8f9d9dbd52c430bbc1f2b.jpg'
                    }} 
                    style={styles.iconContainer2}
                    />
                    <Text style={{color: 'black', fontSize: 11, textAlign:'center'}}>chandlerBing</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={{
                        uri:'https://pbs.twimg.com/profile_images/1281695196175052806/dSGYMiU6_400x400.jpg'
                    }} 
                    style={styles.iconContainer2}
                    />
                    <Text style={{color: 'black', fontSize: 11, textAlign:'center'}}>rachelGreen</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={{
                        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1E2Cf3sUsFyKm-njyXF3u_JRUZBmsdn5s8g&usqp=CAU'
                    }} 
                    style={styles.iconContainer2}
                    />
                    <Text style={{color: 'black', fontSize: 11, textAlign:'center'}}>joeyTribbiani</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={{
                        uri:'https://i.pinimg.com/originals/58/24/86/582486eb19b1088bcd33e3efc4189d68.jpg'
                    }} 
                    style={styles.iconContainer2}
                    />
                    <Text style={{color: 'black', fontSize: 11, textAlign:'center'}}>rossGeller</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 13,
        
    },

    iconContainer1:{
        marginLeft: 13.5,
        height: 70,
        width:70,
        flexDirection: 'row',
        padding: 8, 
        borderRadius: 50,
        borderWidth: 2,
        borderColor : '#ff1493',
    },

    iconContainer2:{
        marginLeft: 8,
        height: 70,
        width:70,
        flexDirection: 'row',
        padding: 8, 
        borderRadius: 50,
        borderWidth: 2,
        borderColor : '#ff1493',
    },

    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 18,
    },

})

export default Stories