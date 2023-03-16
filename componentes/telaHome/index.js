import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './estilo';

export default function Home (props) {
  return (
    <View style={estilo.container}>

      <View onTouchStart={()=>{props.navigation.navigate('Rota')}}>
        <Text style={estilo.titulo} >
          Mostraremos 5 famílias de ícones diferentes.
        </Text>
      </View>
      <Text style={estilo.texto}>
          Clique nos botões abaixo para ver-los
      </Text>
      <View style={estilo.botao}>
        <Button
          title='Menu'
          onPress={()=>{props.navigation.openDrawer()}}
        />
      </View>

      <View style={estilo.botao}>
        <Button
          title='Entypo'
          onPress={()=>{props.navigation.navigate('Entypo')}}         
        />
      </View>
      <View style={estilo.botao}>
        <Button
          title='FontAwesome'
          onPress={()=>{props.navigation.navigate('FontAwesome')}}         
        />
      </View>
      <View style={estilo.botao}>
        <Button
          title='AntDesign'
          onPress={()=>{props.navigation.navigate('AntDesign')}}         
        />
      </View>
      <View style={estilo.botao}>
        <Button
          title='FontAwesome5'
          onPress={()=>{props.navigation.navigate('FontAwesome5')}}         
        />
      </View>
      <View style={estilo.botao}>
        <Button
          title='Ionicons'
          onPress={()=>{props.navigation.navigate('Ionicons')}}         
        />
      </View>
      </View>
  );
}

