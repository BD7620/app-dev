import * as React from 'react';
import {
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
import { List } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import THEMES from "./components/themes/";
import { ThemeProvider, Div, Text } from "react-native-magnus";
import ThemeSwitcher from "./components/ThemeSwitcher";

import { DrawerContent } from './components/DrawerContent';
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
const backgroundPurple ="#35358C";
const navBackground ="#35358C";

const TuftsBlue = "#3C99DC";
const MayaBlue = "#66D3FA";
const WaterBlue = "#D5F3FE";
const LapisLazuliBlue = "#2565AE";
const YaleBlue = "#0F5298";
//const navBackgroundBlue = "";



function Intro({ navigation }) {
  return (
<TouchableWithoutFeedback onPress={() => {
              navigation.navigate('Anxiety1');
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

function Anxiety1({ navigation }) {
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
        <Text style={{fontFamily: 'Lexend_300Light', fontSize: windowHeight/25, color: 'white'}}>Abdomen Breathing</Text>
        </View>
      </View>
    </View>



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094c', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
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

function Anxiety2({ navigation }) {
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
        <Text style={{fontFamily: 'Lexend_300Light', fontSize: windowHeight/25, color: 'white'}}>Equal Breathing</Text>
        </View>
      </View>
    </View>



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094c', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
      <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
        <View style={{flex:1, paddingBottom: '5%', flexDirection:'row'}}>
          <View style={{height:'100%', aspectRatio:1, backgroundColor: navBackground, borderRadius: 20, justifyContent:'center'}}>
            <Icon name="clock-time-ten-outline" type="material-community" color="white" size={30}/>
          </View>
          <View style={{paddingLeft: '5%', flexDirection:'column'}}>
            <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/32}}>Length:</Text>
            <Text style={{fontFamily: 'Lexend_300Light', color: 'white', fontSize: windowHeight/40}}>8sec per</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <ScrollView>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Another form of breathing that stems from the ancient practice of pranayama yoga is equal breathing. This means you’re inhaling for the same amount of time as you’re exhaling.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>You can practice equal breathing from a sitting or lying-down position. Whichever position you choose, be sure to get comfortable.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>1. Shut your eyes and pay attention to the way you normally breathe for several breaths.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>2. Then, slowly count 1-2-3-4 as you inhale through your nose.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>3. Exhale for the same four-second count.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>4. As you inhale and exhale, be mindful of the feelings of fullness and emptiness in your lungs.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>As you continue practicing equal breathing, your second count might vary. Be sure to keep your inhale and exhale the same.</Text>
          </ScrollView>
        </View>
      </View>
    </View>
    
    </SafeAreaView>
  </View>
  );
}

function Sport1({ navigation }) {
  return (
    <View style={{backgroundColor: navBackground, flex: 1}}>
    <SafeAreaView style={{ flex: 1}}>
    
    <View style={{flex:2, paddingHorizontal: '5%', paddingBottom: '5%'}}>
      <View style={{flex:1,  justifyContent:'center',alignItems:'flex-start'}}>
        <Icon name="menu" type="material-community" color="white" size={35} onPress={() => navigation.toggleDrawer()}/>
      </View>
    
      <View style={{flex:5, alignItems:'center' }}>
        <View style={{flex: 1, aspectRatio:1, justifyContent:'center'}}>
          <Icon name="soccer" type="material-community" color="white" size={180} />
        </View>
      </View>

      <View style={{flex:1.6}}>
        <View style={{flex:3, justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Lexend_700Bold', fontSize: windowHeight/25, color: 'white'}}>Sports Performance</Text>
        </View>
        <View style={{flex:2, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Lexend_300Light', fontSize: windowHeight/25, color: 'white'}}>Diaphragmatic breathing</Text>
        </View>
      </View>
    </View>



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094c', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
      <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
        <View style={{flex:1, paddingBottom: '5%', flexDirection:'row'}}>
          <View style={{height:'100%', aspectRatio:1, backgroundColor: navBackground, borderRadius: 20, justifyContent:'center'}}>
            <Icon name="clock-time-ten-outline" type="material-community" color="white" size={30}/>
          </View>
          <View style={{paddingLeft: '5%', flexDirection:'column'}}>
            <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/32}}>Length:</Text>
            <Text style={{fontFamily: 'Lexend_300Light', color: 'white', fontSize: windowHeight/40}}>5-10 mins</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <ScrollView>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>The opposite to shallow breathing, diaphragmatic breathing is the type of breathing that babies do naturally where their bellies rise and fall with each breath. This is completely different to adults, who for the most part breathe entirely in the upper portion of their trunk.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>1. Sit upright in a chair with your back supported or on the floor with your knees bent.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>2. Close your eyes and focus in on your breath, ensuring your shoulders draw away from your ears. </Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>3. Place one hand below your bellybutton and the other on your chest.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>4. Breathe in deeply through your nose and allow your abdomen to rise like a balloon being filled.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>5. Notice the bottom hand rising and falling with your breath and exhale, slowly allowing your belly to deflate.</Text> 
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Repeat for 5-10 minutes.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>You can also try it lying on the floor with your feet pushed up against a wall. The more you practise diaphragmatic breathing, the more natural it will become.</Text>
          </ScrollView>
        </View>
      </View>
    </View>
    
    </SafeAreaView>
  </View>
  );
}

function Sport2({ navigation }) {
  return (
    <View style={{backgroundColor: navBackground, flex: 1}}>
    <SafeAreaView style={{ flex: 1}}>
    
    <View style={{flex:2, paddingHorizontal: '5%', paddingBottom: '5%'}}>
      <View style={{flex:1,  justifyContent:'center',alignItems:'flex-start'}}>
        <Icon name="menu" type="material-community" color="white" size={35} onPress={() => navigation.toggleDrawer()}/>
      </View>
    
      <View style={{flex:5, alignItems:'center' }}>
        <View style={{flex: 1, aspectRatio:1, justifyContent:'center'}}>
          <Icon name="soccer" type="material-community" color="white" size={180} />
        </View>
      </View>

      <View style={{flex:1.6}}>
        <View style={{flex:3, justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Lexend_700Bold', fontSize: windowHeight/25, color: 'white'}}>Sports Performance</Text>
        </View>
        <View style={{flex:2, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Lexend_300Light', fontSize: windowHeight/25, color: 'white'}}>Long Exhale Breathing</Text>
        </View>
      </View>
    </View>



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094c', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
      <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
        <View style={{flex:1, paddingBottom: '5%', flexDirection:'row'}}>
          <View style={{height:'100%', aspectRatio:1, backgroundColor: navBackground, borderRadius: 20, justifyContent:'center'}}>
            <Icon name="clock-time-ten-outline" type="material-community" color="white" size={30}/>
          </View>
          <View style={{paddingLeft: '5%', flexDirection:'column'}}>
            <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/32}}>Length:</Text>
            <Text style={{fontFamily: 'Lexend_300Light', color: 'white', fontSize: windowHeight/40}}>5-10 mins</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <ScrollView>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Long Exhale breathing is good for reducing anxiety and helping you to get better sleep allowing you to perform better the next day. You should perform this when you can't sleep, are anxious before a race, or the night before a big race or competition.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>1. Lay on your back with your knees bent and your feet flat.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>2. Place one hand on your abdomen and take a few relaxed breaths.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>3. Lengthen out the inhalation and exhalation until they're of equal length and progressively increase the length of your exhale until you have a 1:2 ratio.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Continue for 5-10 minutes.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>If you've just had a big blow out run and the icy cold wind is making it hard to breathe, use the same long exhale technique to regain control of your breathing and give yourself a better chance to recharge your stamina.</Text>
          </ScrollView>
        </View>
      </View>
    </View>
    
    </SafeAreaView>
  </View>
  );
}

function Sleep1({ navigation }) {
  return (
    <View style={{backgroundColor: navBackground, flex: 1}}>
    <SafeAreaView style={{ flex: 1}}>
    
    <View style={{flex:2, paddingHorizontal: '5%', paddingBottom: '5%'}}>
      <View style={{flex:1,  justifyContent:'center',alignItems:'flex-start'}}>
        <Icon name="menu" type="material-community" color="white" size={35} onPress={() => navigation.toggleDrawer()}/>
      </View>
    
      <View style={{flex:5, alignItems:'center' }}>
        <View style={{flex: 1, aspectRatio:1, justifyContent:'center'}}>
          <Icon name="sleep" type="material-community" color="white" size={180} />
        </View>
      </View>

      <View style={{flex:1.6}}>
        <View style={{flex:3, justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Lexend_700Bold', fontSize: windowHeight/25, color: 'white'}}>Sleep</Text>
        </View>
        <View style={{flex:2, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Lexend_300Light', fontSize: windowHeight/25, color: 'white'}}>4-7-8 Breathing</Text>
        </View>
      </View>
    </View>



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094c', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
      <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
        <View style={{flex:1, paddingBottom: '5%', flexDirection:'row'}}>
          <View style={{height:'100%', aspectRatio:1, backgroundColor: navBackground, borderRadius: 20, justifyContent:'center'}}>
            <Icon name="clock-time-ten-outline" type="material-community" color="white" size={30}/>
          </View>
          <View style={{paddingLeft: '5%', flexDirection:'column'}}>
            <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/32}}>Length:</Text>
            <Text style={{fontFamily: 'Lexend_300Light', color: 'white', fontSize: windowHeight/40}}>2-3 mins</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <ScrollView>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>1. Allow your lips to gently part.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>2. Exhale completely, making a breathy whoosh sound as you do.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>3. Press your lips together as you silently inhale through the nose for a count of 4 seconds.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>4. Hold your breath for a count of 7.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>5. Exhale again for a full 8 seconds, making a whooshing sound throughout.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>6. Repeat 4 times when you first start. Eventually work up to 8 repetitions.</Text>
          </ScrollView>
        </View>
      </View>
    </View>
    
    </SafeAreaView>
  </View>
  );
}

function Sleep2({ navigation }) {
  return (
    <View style={{backgroundColor: navBackground, flex: 1}}>
    <SafeAreaView style={{ flex: 1}}>
    
    <View style={{flex:2, paddingHorizontal: '5%', paddingBottom: '5%'}}>
      <View style={{flex:1,  justifyContent:'center',alignItems:'flex-start'}}>
        <Icon name="menu" type="material-community" color="white" size={35} onPress={() => navigation.toggleDrawer()}/>
      </View>
    
      <View style={{flex:5, alignItems:'center' }}>
        <View style={{flex: 1, aspectRatio:1, justifyContent:'center'}}>
          <Icon name="sleep" type="material-community" color="white" size={180} />
        </View>
      </View>

      <View style={{flex:1.6}}>
        <View style={{flex:3, justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Lexend_700Bold', fontSize: windowHeight/25, color: 'white'}}>Sleep</Text>
        </View>
        <View style={{flex:2, justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Lexend_300Light', fontSize: windowHeight/25, color: 'white'}}>Box Breathing</Text>
        </View>
      </View>
    </View>



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094c', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
      <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
        <View style={{flex:1, paddingBottom: '5%', flexDirection:'row'}}>
          <View style={{height:'100%', aspectRatio:1, backgroundColor: navBackground, borderRadius: 20, justifyContent:'center'}}>
            <Icon name="clock-time-ten-outline" type="material-community" color="white" size={30}/>
          </View>
          <View style={{paddingLeft: '5%', flexDirection:'column'}}>
            <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/32}}>Length:</Text>
            <Text style={{fontFamily: 'Lexend_300Light', color: 'white', fontSize: windowHeight/40}}>2-3 mins</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <ScrollView>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>During box breathing, you want to focus intently on the oxygen you’re bringing in and pushing out:</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>1. Sit with your back straight, breathe in, and then try to push all the air out of your lungs as you exhale.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>2. Inhale slowly through your nose and count to 4 in your head, filling your lungs with more air with each number.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>3. Hold your breath and count to 4 in your head.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>4. Slowly exhale through your mouth, focusing on getting all the oxygen out of your lungs.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Box breathing is a common technique during meditation, a very popular method of finding mental focus and relaxing. Meditation has a variety of known benefits for your overall health.</Text>
          </ScrollView>
        </View>
      </View>
    </View>
    
    </SafeAreaView>
  </View>
  );
}

function SleepInfo({ navigation }) {
  return (
    <View style={{backgroundColor: navBackground, flex: 1}}>
    <SafeAreaView style={{ flex: 1}}>
    
    <View style={{flex:2, paddingHorizontal: '5%', paddingBottom: '5%'}}>
      <View style={{flex:1,  justifyContent:'center',alignItems:'flex-start'}}>
        <Icon name="menu" type="material-community" color="white" size={35} onPress={() => navigation.toggleDrawer()}/>
      </View>
    
 

      <View style={{flex:1.6}}>

        <View style={{flex:2, justifyContent: 'flex-end'}}>
        <Text style={{fontFamily: 'Lexend_700Bold', fontSize: windowHeight/25, color: 'white'}}>Information</Text>
        </View>
      </View>
    </View>



    <View style={{width: '100%', flex:6, backgroundColor:'#0b094c', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
      <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
        <View style={{flex:1, paddingBottom: '5%', flexDirection:'row'}}>
          <View style={{height:'100%', aspectRatio:1, borderRadius: 20, justifyContent:'center'}}>
            <Icon name="sleep" type="material-community" color="white" size={48}/>
          </View>
          <View style={{flexDirection:'column', justifyContent:'center'}}>
            <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/26}}>Sleep</Text>
          </View>
        </View>
        <View style={{flex:6}}>
          <ScrollView>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Concentration and productivity:</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Good sleep can maximize problem-solving skills and enhance memory. Poor sleep has been shown to impair brain function.</Text>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Athletic Performance:</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Longer sleep has been shown to improve many aspects of athletic and physical performance.</Text>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Depression:</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>It’s been estimated that 90% of people with depression complain about sleep quality. Poor sleeping patterns are strongly linked to depression, particularly for those with a sleeping disorder.</Text>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/40, paddingVertical: '4%', textAlign:'center'}}>Just the facts: (from 'greatist.com') </Text>

            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>1) Seven hours of shut-eye is best</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Various public figures have boasted about getting by on little to no sleep, but this isn’t recommended. We need at least 7 hours each night, although this varies slightly according to age (find your figure here). Don’t forget to factor in dozing-off time.</Text>
            

            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>2) …but 9 hours is too much</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>We can feel pretty crappy if we don’t get enough sleep, but staying in the land of nod for too long can have a similar effect — and contribute to health concerns like obesity and heart disease.</Text>
            

            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>3) Falling asleep should take 20 mins, max</Text>
           
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>A number of factors could cause delays in getting to Snoozetown (*cough* phone screens), but conking out as soon as your head hits the pillow isn’t great, either. This explainer is your one-way ticket to optimum dozing off.</Text>
            

            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>4) There are four sleep stages</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>And the fourth and final one, REM (rapid eye movement), is the most important. This is when your brain is most active and more vivid dreams occur. Get all the tea on sleep cycles.</Text>
            

            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>5) 37 million adults regularly snore</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Which equates to a whole lot of grumpy partners/roommates/pets. If your bedmate (or you) is known to rumble in the bedroom jungle, check out what one Greatist writer and her S.O. did to make things better.</Text>
            

            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>6) Up to 40 percent of us will experience sleep paralysis</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>It’s not permanent and is often a one-off, but it can be hella frightening. Everything from mental health issues to narcolepsy can trigger these episodes, but some simple strategies can help ease them.</Text>


            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>7) Socks help you sleep</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Socks and sleep are a welcome pairing: Covering your tootsies encourages blood circulation, encouraging your brain to wind down — so pop on a pair an hour or so before bedtime.</Text>

            
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>8) A shower before bed makes a sleepyhead</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Showering in the morning to start your day makes sense, but standing under a torrent of warm water at night actually helps prepare your body for sleep.</Text>


            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>9) You can’t catch up on missed hours by sleeping in</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>In fact, research shows it takes 4 days to make up for just 1 hour of missed sleep.</Text>


            
            
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>10) We dream for various reasons</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>There’s no definitive answer for why we dream — but theories include our minds prepping us for fight-or-flight situations, processing memories or the day’s events, and helping us retain important info.</Text>


            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>11) About 95 percent of dreams are forgotten</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>So don’t feel too frustrated if your dream memory bank is looking pretty empty.</Text>


            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>12) Lots of factors impact dream recall</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>True fact: Everything from age and gender to stress and sleep disorders plays a role in our ability to remember dreams.</Text>


            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>13) Some of us dream in black and white</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>For 12 percent of people, dreams can play out in a cool, old-school movie monochrome style. Color us jealous.</Text>


            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>14) You can help dreams linger</Text>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Keeping your eyes closed and the lights off and jotting down what you remember of your dream as soon as you wake up can help the scenes stay in your mind.

That should definitely be enough facts to prepare you for tonight’s slumber cycles. All that’s left to do is raise a glass of warm milk to many nights ahead of restful sleep, sweet dreams, and beneficial bedroom antics!</Text>


            
          </ScrollView>
        </View>
      </View>
    </View>
    
    </SafeAreaView>
  </View>
  );
}

function FoodInfo({ navigation }) {
  const loadTheme = async() => {
    console.log("loading");
    try{
        let storedtheme = await AsyncStorage.getItem("UserTheme")
        if (storedtheme == "purple" | storedtheme == null)
        {
            //set theme to "THEMES.purple"
        }
        else if(storedtheme=="blue")
        {
            //set theme to "THEMES.blue"
        }
    } catch (err){
      alert(err);
    }
  };

  useEffect(()=>{
    loadTheme();
  }, []);
  
  return (
    <ThemeProvider theme={THEMES.blue}>
      <Div flex={1} bg="pageBackground">
    <SafeAreaView style={{ flex: 1}}>
    
    <View style={{flex:2, paddingHorizontal: '5%', paddingBottom: '5%'}}>
      <View style={{flex:1,  justifyContent:'center',alignItems:'flex-start'}}>
        <Icon name="menu" type="material-community" color="white" size={35} onPress={() => navigation.toggleDrawer()}/>
      </View>
    
 

      <View style={{flex:1.6}}>

        <View style={{flex:2, justifyContent: 'flex-end'}}>
        <Text style={{fontFamily: 'Lexend_700Bold', fontSize: windowHeight/25, color: 'white'}}>Information</Text>
        </View>
      </View>
    </View>



    <Div w='100%' flex={6} bg="cardBackground" roundedTop={40}>
      <View style={{ flex: 1, margin: '5%', marginTop: '5%'}}>
        
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{height:'100%', aspectRatio:1, borderRadius: 20, justifyContent:'center'}}>
            <Icon name="food" type="material-community" color="white" size={48}/>
          </View>
          <View style={{flexDirection:'column', justifyContent:'center'}}>
            <Text style={{fontFamily: 'Lexend_500Medium', color: 'white', fontSize: windowHeight/26}}>Food &#0038; Drink</Text>
          </View>
        </View>

        
        <View style={{flex:6}}>
          <ScrollView>
          <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/40, paddingBottom: '4%', textAlign:'center'}}>Food</Text>
            <View>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Fruit and vegetables</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Fruit and vegetables are packed with vitamins, minerals and fibre. Not only do they make you feel great, they can also help protect you against heart disease and some forms of cancer.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Aim to eat at least five portions of a variety of fruit and vegetables each day – that’s a lot easier than you might think.</Text>
            <Div bg="pageBackground" rounded={30} my="5%">
              <List.Section>
                  <List.Accordion title="What's a portion?" titleStyle={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45}} theme={{colors: {text: "white"}}}>
                  <List.Item title='&#8226; One slice of a large fruit, eg pineapple, melon, mango' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                  <List.Item title='&#8226; One medium fruit, eg apple, banana, pear, orange' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                  <List.Item title='&#8226; Two small fruits, eg kiwi, plums, satsumas' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                  <List.Item title='&#8226; Three heaped tablespoons of cooked vegetables' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                  <List.Item title='&#8226; A dessert bowl of salad' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                  <List.Item title='&#8226; 30g of dried fruit (counts as a maximum of one portion a day)' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                  <List.Item title='&#8226; A glass (150ml) of unsweetened pure fruit or vegetable juice or smoothie (counts as a maximum of one portion a day)' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                  <List.Item title='&#8226; Three heaped tablespoons of cooked vegetables' titleStyle={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/55, paddingLeft: '5%'}} titleNumberOfLines={3}/>
                </List.Accordion>
              </List.Section>
            </Div>
            
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Potatoes do not count as they are classed as a starchy carbohydrate food.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Dried fruit, fruit juices and smoothies are all high in natural sugar, so they can contribute to tooth decay. It’s best to limit these to mealtimes when they are less damaging to teeth.</Text>
            </View>
            <View>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Potatoes, bread, rice, pasta and other starchy carbohydrates</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Starchy carbohydrates (or starchy energy foods) should form the biggest part of your diet along with fruit and vegetables. As well as providing energy, they’re a source of fibre and B vitamins.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Carbohydrate foods are your body’s fuel and it’s best to choose slow-burning options. Go for wholegrain varieties like multi-grain/wholemeal bread, wholegrain pasta and brown rice.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Contrary to popular belief, they’re not fattening if eaten in moderation and in the proportions outlined in the Eatwell Guide. It’s also important to think about the amount of fat being added when preparing and serving these foods – adding butter or margarine, frying, or serving with creamy sauces can all increase the calorie content and cause unwanted weight gain.</Text>
            
            </View>
            <View>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Beans, pulses, fish, eggs, meat and other proteins</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>The foods in this group offer you a host of benefits and are a great source of protein and iron. Choose lower fat alternatives where possible.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Pulses such as lentils, peas and beans (either dried or tinned) are great lower fat choices and can also help lower your blood cholesterol – these, along with eggs, are cheaper than some of the other sources of protein. Try adding pulses to soups, stews and casseroles, or use them to make veggie lasagne or curry.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Aim for at least two portions of fish a week, one of which should be oily, eg salmon, sardines, mackerel or trout (a portion of fish is 140g). Try to choose sustainably sourced fish.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Choose lean cuts of meat, remove visible fat and skin from poultry, and use cooking methods that don’t add extra fat, such as grilling, stewing, casseroling, dry roasting, poaching etc.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>If you eat more than 90g of red or processed meat per day, try to cut down to no more than 70g per day. The term processed meat includes bacon, sausages, cured meats and re-formed meat products such as cooked ham and pre-cooked chicken slices.</Text>
            </View>
            <View>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Dairy and alternatives</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Milk and dairy foods like cheese and yogurt are an important source of calcium, protein and vitamins A and B12. Try to have some every day. They also contain fat, so look out for lower fat options where possible, like swapping whole milk for semi-skimmed or swapping creamy yogurts for low fat varieties.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>If you choose to avoid dairy foods, it’s important to substitute with non-dairy alternatives, such as soya drinks, yogurt etc. It’s important to choose unsweetened varieties that are fortified with calcium and vitamin D.</Text>
            </View>
            <View>
            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%'}}>Oils and spreads</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>We need some fat in our diet. However, we generally eat more than is good for our health. Try to choose fats and oils that are labelled ‘high in polyunsaturates’ or ‘high in monounsaturates’ and limit the amount you use.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Spread butter, margarine or low fat spreads thinly. When cooking, measure oil on a spoon instead of pouring from the bottle, as you have more control over the amount being added. Spray oils can also be used and generally have fewer calories in them, but always check the labels.</Text>
            </View>

            <Text style={{fontFamily: 'Lexend_700Bold', color: 'white', fontSize: windowHeight/40, paddingBottom: '4%', textAlign:'center'}}>Drinking</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Keeping our bodies well hydrated is really important for our general health.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Adults should aim to drink around 1.5 – 2 litres of fluid each day (between 6–8 mugs/glasses of fluid). The best choices are water, lower fat milk, and sugar free drinks including tea and coffee.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>A can of soft drink such as fizzy orange or cola can have up to 8 teaspoons of sugar in it so it’s best to avoid these. Diet drinks and sugar-free squashes are a better alternative.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Fruit juice and smoothies count towards your total fluid intake, but remember these should be limited to 150ml each day because of their high sugar content.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Energy drinks often contain high levels of caffeine and are often high in sugar (calories). They may also contain other stimulants, and sometimes vitamins and minerals or herbal substances. They are not suitable for children and consumption should be limited in adults.</Text>
            <Text style={{fontFamily: 'Lexend_400Regular', color: 'white', fontSize: windowHeight/45, paddingBottom: '2%', paddingLeft: '5%'}}>Sports drinks can be useful for those involved in high-level endurance sports. For most people, water or milk is the healthier choice and the best way to replace fluids lost through exercise. Sports drinks are no different from any other sugary soft drinks, which mean they're high in calories and contribute to tooth decay.</Text>
          </ScrollView>
        </View>
      </View>
    </Div>
    
    </SafeAreaView>
  </Div>
  </ThemeProvider>
  );
}

function setThemePage({ navigation }) {
  
  
  return (
    <ThemeProvider theme={THEMES.purple}>
      <Div bg="pageBackground" flex={1}>
      <SafeAreaView>
      <Div>
      <ThemeSwitcher />
      <Div w="100%" h="75%" bg="cardBackground"></Div>
      </Div>
      </SafeAreaView>
      </Div>
    </ThemeProvider>
  );
}


export default function App() {

  let [fontsLoaded] = useFonts({
    Lexend_100Thin,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Intro" headerMode="none" 
      drawerStyle={{
        backgroundColor: navBackground,
      }}
      drawerType={"front"}
      drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Intro" component={Intro}/>
        <Drawer.Screen name="Anxiety1" component={Anxiety1}/>
        <Drawer.Screen name="Anxiety2" component={Anxiety2}/>
        <Drawer.Screen name="Sport1" component={Sport1}/>
        <Drawer.Screen name="Sport2" component={Sport2}/>
        <Drawer.Screen name="Sleep1" component={Sleep1}/>
        <Drawer.Screen name="Sleep2" component={Sleep2}/>
        <Drawer.Screen name="SleepInfo" component={SleepInfo}/>
        <Drawer.Screen name="FoodInfo" component={FoodInfo}/>
        <Drawer.Screen name="setThemePage" component={setThemePage}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );}
}

const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
  header: {
    color: 'white',
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