import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient (){
    return (
        <TouchableOpacity  
            onPress={() => Navigation.navigate('Stack')}
            style={styles.container}>
            <LinearGradient 
                colors={['#4B0082', '#4176fc']}
                start={{ x: 0, y: 0}}
                end={{y: 1, x: 1}}
                style={styles.button}>
                <Text style={styles.text}>Iniciar sesion</Text>
            </LinearGradient>    
        </TouchableOpacity>

    )
    
}

const styles = StyleSheet.create({
    container:{
        width: 200,
        alignItems: 'center',
        marginTop: 45
    },

   button:{
    width:'80%',
    height:60,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
   },

   text:{
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
   }
})  