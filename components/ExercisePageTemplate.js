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
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

import AppLoading from 'expo-app-loading';
import { useFonts, 
  Lexend_100Thin,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_800ExtraBold, } from '@expo-google-fonts/lexend';

const moon = '#C2B8DB';
const navBackground = "#35358C";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function ExercisePage() {
    return (
        <View style={{backgroundColor: navBackground, flex: 1}}>
        <SafeAreaView style={{ flex: 1}}>
        
        <View style={{flex:2, paddingHorizontal: '5%', paddingBottom: '5%'}}>
          <View style={{flex:1,  justifyContent:'center',alignItems:'flex-start'}}>
            <Icon name="menu" type="material-community" color="white" size={35} onPress={() => navigation.toggleDrawer()}/>
          </View>
        
          <View style={{flex:5, alignItems:'center' }}>
            <View style={{flex: 1, aspectRatio:1, justifyContent:'center'}}>
              <Icon name="head-snowflake" type="material-community" color="white" size={180} />
            </View>
          </View>
  
          <View style={{flex:1.6}}>
            <View style={{flex:3, justifyContent: 'center'}}>
              <Text style={{fontFamily: 'Lexend_700Bold', fontSize: windowHeight/25, color: 'white'}}>Anxiety</Text>
            </View>
            <View style={{flex:2, justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Lexend_300Light', fontSize: windowHeight/25, color: 'white'}}>Abdomen breathing</Text>
            </View>
          </View>
        </View>
  
  
  
        <View style={{width: '100%', flex:3, backgroundColor:'#0b094cff', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
          <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
            <View style={{flex:1, paddingBottom: '5%', flexDirection:'row'}}>
              <View style={{height:'100%', aspectRatio:1, backgroundColor: navBackground, borderRadius: 20, justifyContent:'center'}}>
                <Icon name="clock-time-ten-outline" type="material-community" color="white" size={30}/>
              </View>
              <View style={{paddingLeft: '5%', flexDirection:'column'}}>
                <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/32}}>Length:</Text>
                <Text style={{fontFamily: 'Lexend_300Light', color: 'white', fontSize: windowHeight/40}}>Self-directed</Text>
              </View>
            </View>
            <View style={{flex:6}}>
              <ScrollView>
                <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Breathing from your diaphragm (the muscle that sits just beneath your lungs) can help reduce the amount of work your body needs to do in order to breathe.</Text>
                <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>1. Sit or lie down</Text>
                <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>2. Place one hand on your chest and one hand on your stomach somewhere above your belly button.</Text>
                <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>3. Breathe in through your nose, noticing your stomach rise. Your chest should remain relatively still.</Text>
                <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>4. Purse your lips and exhale through your mouth. Try engaging your stomach muscles to push air out at the end of the breath.</Text>
                <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>For this type of breathing to become automatic, you’ll need to practice it daily. Try doing the exercise three or four times a day for up to 10 minutes.</Text>
                <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>If you haven’t been using your diaphragm to breathe, you may feel tired at first. It’ll get easier with practice though.</Text>
              </ScrollView>
            </View>
          </View>
        </View>
        
        </SafeAreaView>
      </View>
    );
  }