import React from 'react';
import { StatusBar } from 'react-native';
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



function Singup() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../assets/usuario.png')} 
        style={{width:90, height:90}}/>

      <Text style={styles.titulo}>Registrate</Text>
      <Text style={styles.subTitulo}>Crea una Cuenta</Text>

      <TextInput 
        placeholder='Nombre'
        style={styles.textInput}>
      </TextInput>
      <TextInput 
        placeholder='Apellido'
        style={styles.textInput}>
      </TextInput>

      <TextInput 
        placeholder='hola@gmail.com'
        style={styles.textInput}>
      </TextInput>
      <TextInput 
        placeholder='contraseña'
        style={styles.textInput}
        secureTextEntry={true}>
      </TextInput>

      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Login')}>
      <Text>Registrarme</Text>
      </TouchableOpacity>

 


    </View>
    


  );
}

export default Singup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },  

  titulo:{
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10
  },
  subTitulo:{
    color:'#fff',
    fontSize: 15,
    padding: 10,
  },
  textInput:{
    color:'#fff',
    padding: 10,
    paddingStart : 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#353839'
  },

  button:{
    backgroundColor: '#4176fc',
    marginTop: '10%',
    width:'40%',
    height:50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registro:{
    color:'#4176fc',
    fontSize: 15,
    marginTop: 20,
  }
});
