import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function TelaEntypo() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Entypo name="fingerprint" size={24} color="black" style={styles.icon}/>
        <Text style={styles.iconText}>Fingerprint</Text>
      </View>
      <View style={styles.iconContainer}>
        <Entypo name="flash" size={24} color="#FEFF1C" style={styles.icon}/>
        <Text style={styles.iconText}>Flash</Text>
      </View>
      <View style={styles.iconContainer}>
      <Entypo name="flower" size={24} color="#FF0B00" style={styles.icon}/>
        <Text style={styles.iconText}>Flower</Text>
      </View>
      <View style={styles.iconContainer}>
      <Entypo name="drop" size={24} color="#00F5FF" style={styles.icon}/>
        <Text style={styles.iconText}>Drop</Text>
      </View>
      <View style={styles.iconContainer}>
      <Entypo name="dribbble" size={24} color="#FF7800" style={styles.icon} />
        <Text style={styles.iconText}>Dribbble</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'#DEDEDE',
      justifyContent: 'center'
    },
    icon: {
      marginRight: 10,
    },
    iconContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor:'#7D7D7D',
      borderRadius: 8,
      height: 50,
      width: 200,
      marginTop: 10
  
      
    },
    iconText: {
      marginTop: 0,
      fontSize: 16,
      fontWeight: 'bold',
    },
});
