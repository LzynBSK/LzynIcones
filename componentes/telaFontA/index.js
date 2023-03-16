import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function TelaFontA() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      <FontAwesome name="check" size={24} color="green" style={styles.icon}/>
        <Text style={styles.iconText}>Check</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome name="signal" size={24} color="yellow" style={styles.icon}/>
        <Text style={styles.iconText}>Signal</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome name="download" size={24} color="black" style={styles.icon}/>
        <Text style={styles.iconText}>Download</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome name="play-circle-o" size={24} color="#FF0000" style={styles.icon}/>
        <Text style={styles.iconText}>Play-Circle-O</Text>
      </View>
      <View style={styles.iconContainer}>
      <FontAwesome name="flag" size={24} color="#fff" style={styles.icon}/>
        <Text style={styles.iconText}>Flag</Text>
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
