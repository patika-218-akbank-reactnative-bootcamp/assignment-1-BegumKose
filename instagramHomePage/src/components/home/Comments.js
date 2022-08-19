import React from 'react';
import { View,Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Divider} from 'react-native-elements'

const Comments = () => (
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
            <Text style={{color: 'black', fontSize: 11, textAlign:'center', marginLeft: 4, fontWeight: 'bold'}}>rachelGreen </Text>   
            <Text style={{color: 'black', fontSize: 11, textAlign:'center', marginLeft: 3}}>Looks pretty good! Yes, I know it. Joey knows, but Ross doesn't, so</Text>   
            
            </View>
            <Text style={{color: 'black', fontSize: 11, marginLeft: 3}}>stop screaming! </Text>  
            <View style={{ 
                display : 'flex',
                flexDirection:'row',
                alignItems: 'center',}}>
            <Text style={{color: 'black', fontSize: 11, textAlign:'center', marginLeft: 4, fontWeight: 'bold'}}>joeyTribbiani </Text>   
            <Text style={{color: 'black', fontSize: 11, textAlign:'center', marginLeft: 3}}>So they know you know, and they don't know that Rachel knows?</Text>   
            </View>
            <View style={{ 
                display : 'flex',
                flexDirection:'row',
                alignItems: 'center',}}>
            <Text style={{color: 'black', fontSize: 11, textAlign:'center', marginLeft: 4, fontWeight: 'bold'}}>rossGeller </Text>   
            <Text style={{color: 'black', fontSize: 11, textAlign:'center', marginLeft: 3}}>What?!What's going on?</Text>   
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

export default Comments