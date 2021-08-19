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
import { ExercisePage } from './components/ExercisePageTemplate';
import { IntroPage } from "./pages/Intro"

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


function Intro({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Anxiety1');
  }, 5000);
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



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094cff', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
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



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094cff', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
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



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094cff', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
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



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094cff', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
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



    <View style={{width: '100%', flex:3, backgroundColor:'#0b094cff', borderTopLeftRadius: 40, borderTopRightRadius: 40, elevation: 24, }}>
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

