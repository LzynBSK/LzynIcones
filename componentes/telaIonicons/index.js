import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaIonicons() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      <Ionicons name="alarm-outline" size={24} color="#FE1201" style={styles.icon}/>
        <Text style={styles.iconText}>Alarm-Outline</Text>
      </View>
      <View style={styles.iconContainer}>
      <Ionicons name="american-football-sharp" size={24} color="#FFA200" style={styles.icon}/>
        <Text style={styles.iconText}>American-Football</Text>
      </View>
      <View style={styles.iconContainer}>
      <Ionicons name="apps" size={24} color="black" style={styles.icon}/>
        <Text style={styles.iconText}>Apps</Text>
      </View>
      <View style={styles.iconContainer}>
      <Ionicons name="bandage-outline" size={24} color="#FCFF7E" style={styles.icon}/>
        <Text style={styles.iconText}>Bandage-Outline</Text>
      </View>
      <View style={styles.iconContainer}>
      <Ionicons name="barbell" size={24} color="#00FEC3" style={styles.icon}/>
        <Text style={styles.iconText}>Barbell</Text>
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
