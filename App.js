import { NavigationContainer } from '@react-navigation/native';
import Home from './componentes/telaHome/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import TelaEntypo from './componentes/telaIcons/index';
import TelaFontA from './componentes/telaFontA/index';
import TelaAntDesign from './componentes/telaAntD/index';
import TelaFontA5 from './componentes/telaFontA5/index';
import TelaIonicons from './componentes/telaIonicons/index';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Icones Lzyn   </Text>
        <FontAwesome5 name="icons" size={24} color="#FDB927" />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Entypo" component={TelaEntypo}/>
        <Drawer.Screen name="FontAwesome" component={TelaFontA}/>
        <Drawer.Screen name="AntDesign" component={TelaAntDesign}/>
        <Drawer.Screen name="FontAwesome5" component={TelaFontA5}/>
        <Drawer.Screen name="Ionicons" component={TelaIonicons}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#D5B5FF',
  },
  drawerHeader: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#552583',
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});


