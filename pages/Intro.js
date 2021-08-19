import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


const moon = '#C2B8DB';
const navBackground = "#35358C";

function IntroPage({ navigation }) {
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
              fontSize: windowWidth / 15,
              position: 'absolute',
              alignSelf: 'center',
              fontFamily: 'Lexend_400Regular',
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



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


  const styles = StyleSheet.create({
    header: {
      color: 'white',
      //backgroundColor: 'green',
      fontSize: windowWidth / 16,
      fontWeight: 'bold',
      marginLeft: '5%',
      flex: 1.5,
      textAlignVertical: 'center',
    },
    headerNoBack: {
      color: 'white',
      fontSize: windowWidth / 16,
      flex: 1.5,
      textAlignVertical: 'center',
      fontFamily: 'Lexend_600SemiBold',
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
      fontSize: windowWidth / 18,
      fontFamily: 'Lexend_400Regular',
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
  
  