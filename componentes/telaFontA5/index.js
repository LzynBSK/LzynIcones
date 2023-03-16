import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TelaFontA5() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      <FontAwesome5 name="basketball-ball" size={24} color="black" style={styles.icon}/>
        <Text style={styles.iconText}>Basketball-Ball</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome5 name="battery-full" size={24} color="green" style={styles.icon}/>
        <Text style={styles.iconText}>Batery-Full</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome5 name="battery-half" size={24} color="#FFA200" style={styles.icon}/>
        <Text style={styles.iconText}>Batery-Half</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome5 name="battery-quarter" size={24} color="red" style={styles.icon}/>
        <Text style={styles.iconText}>Batery-Quarter</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome5 name="battle-net" size={24} color="#D600FE" style={styles.icon}/>
        <Text style={styles.iconText}>Battle-Net</Text>
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
