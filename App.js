import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Card } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContent } from './components/DrawerContent';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

const moon = '#C2B8DB';
const navBackground = "#35358C";

let width = Dimensions.get('window').width;

function Intro({ navigation }) {
  setTimeout(() => {
    navigation.navigate('BreathingHub');
  }, 5000);
  return (
<TouchableWithoutFeedback onPress={() => {
              navigation.navigate('BreathingHub');
            }}> 
  <LinearGradient
      colors={['#0B094C', navBackground]}
      start={[0, 1]}
      end={[1, 0]}
      style={{ flex: 1 }}>

      <View style={{ width: '50%', left: '-25%', top: '-10%' }}>
        <View style={styles.moon}></View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: width / 15,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          
          Welcome to "App Name"
        </Text>
      </View>
      <View style={styles.triangle1}></View>
      <View style={styles.triangle2}></View>
      <View style={styles.triangle3}></View>

    </LinearGradient>
    </TouchableWithoutFeedback>
   
  );
}

function BreathingHub({ navigation }) {
  return (
    <LinearGradient
      colors={['#0B094C', '#35358C']}
      start={[0, 1]}
      end={[1, 0]}
      style={{ flex: 1, justifyContent: 'center' }}>

      <View style={{ flex: 2, backgroundColor: '#0B094C' }}>
        <SafeAreaView style={{ flex: 1, flexDirection: "row" }}>
          {/*<TouchableOpacity
            style={{
              flex: 1,
              width: '10%',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Intro');
            }}>
            <Icon name="arrow-back-outline" type="ionicon" color="#C2B8DB" />
          </TouchableOpacity>*/}
          <View style={{ justifyContent: 'center', flex: 3, alignItems: 'center', }}>
            <Text style={styles.headerNoBack}>Breathing Hub</Text>
          </View>
        </SafeAreaView>
      </View>
      <View style={{ flex: 9, margin: '5%', justifyContent: 'space-between' }}>

        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate();
        }}>
          <Text style={styles.buttontext}>Stress/Anxiety</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate();
        }}>
          <Text style={styles.buttontext}>Lung Capacity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Sleep</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Sports Performance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Singing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Kids</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}





function SleepInfoScreen({ navigation }) {
  return (
    <View style={{backgroundColor: navBackground, flex: 1,}}>
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1, backgroundColor: navBackground}}>
        <ScrollView style={{margin:'5%'}}>
        <Text style={{ color: 'white', fontWeight: 'bold', alignSelf:'center', backgroundColor: 'red', textAlign:'center', width: '100%' }}>
          Lorum
        </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Intro" headerMode="none" 
      drawerStyle={{
        backgroundColor: navBackground,
      }}
      drawerType={"front"}
      drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Intro" component={Intro}/>
        <Drawer.Screen name="BreathingHub" component={BreathingHub} />
        <Drawer.Screen name="SleepInfo" component={SleepInfoScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyTheme = {
  dark: true,
  colors: {
    primary: 'white',
    background: '#0B094C',
    card: '#35358C',
    text: 'grey',
    border: 'transparent',
    notification: 'yellow',
    overlayColor: 'red',
  },
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    //backgroundColor: 'green',
    fontSize: width / 16,
    fontWeight: 'bold',
    marginLeft: '5%',
    flex: 1.5,
    textAlignVertical: 'center',
  },
  headerNoBack: {
    color: 'white',
    fontSize: width / 16,
    fontWeight: 'bold',
    flex: 1.5,
    textAlignVertical: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#35358C',
    borderRadius: 15,
    flex: 0.15,
    flexDirection: 'row',
  },
  buttontext: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: width / 18,
  },
  moon: {
    position: 'absolute',
    width: '100%',
    paddingTop: '100%',
    borderRadius: windowWidth / 2,
    backgroundColor: moon,
  },
  triangle1: {
    zIndex: 1,
    left: '-5%',
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: windowWidth / 3,
    borderRightWidth: windowWidth / 3,
    borderBottomWidth: windowHeight / 6.5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#29297A',
  },
  triangle2: {
    zIndex: 0,
    position: 'absolute',
    right: '5%',
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: windowWidth / 3,
    borderRightWidth: windowWidth / 3,
    borderBottomWidth: windowHeight / 3.8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#222466',
  },
  triangle3: {
    zIndex: 3,
    position: 'absolute',
    right: '-12%',
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: windowWidth / 3,
    borderRightWidth: windowWidth / 3,
    borderBottomWidth: windowHeight / 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#35358C',
  },
});