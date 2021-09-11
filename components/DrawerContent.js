import React from 'react';
import { View, StyleSheet, Dimensions, Button } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { List } from 'react-native-paper';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

let width = Dimensions.get('window').width;

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          
            <List.Section title="Breathing">
              
              <List.Accordion
                title="Stress/Anxiety"
                left={props => <List.Icon {...props} icon="head-snowflake" theme={theme} />}>
                <DrawerItem 
                  label="Abdomen Breathing"
                  onPress={() => { props.navigation.navigate('Anxiety1') }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Equal Breathing"
                  onPress={() => { props.navigation.navigate('Anxiety2') }}
                  inactiveTintColor='white'
                />
              </List.Accordion>

              <List.Accordion
                title="Sports Performance"
                left={props => <List.Icon {...props} icon="soccer" theme={theme} />}>
                <DrawerItem 
                  label="Diaphragmatic Breathing"
                  onPress={() => { props.navigation.navigate('Sport1') }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Long Exhale Breathing"
                  onPress={() => { props.navigation.navigate('Sport2') }}
                  inactiveTintColor='white'
                />
              </List.Accordion>

              <List.Accordion
                title="Sleep"
                left={props => <List.Icon {...props} icon="sleep" theme={theme} />}>
                <DrawerItem 
                  label="4-7-8 Breathing"
                  onPress={() => { props.navigation.navigate('Sleep1') }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Box Breathing"
                  onPress={() => { props.navigation.navigate('Sleep2') }}
                  inactiveTintColor='white'
                />
              </List.Accordion>
            </List.Section>

            <List.Section title="Info">
               <Drawer.Item
                style={{}}
                icon="food"
                label="Food/Drink"
                onPress={() => { props.navigation.navigate('FoodInfo') }}
                />
              <Drawer.Item
                style={{}}
                icon="sleep"
                label="Sleep"
                onPress={() => { props.navigation.navigate('SleepInfo') }}
                />
            </List.Section>
        </View>
      </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
         <Drawer.Item
                
                icon="compare"
                label="Theme"
                onPress={() => { props.navigation.navigate('setThemePage') }}
                />
        </Drawer.Section>
        </PaperProvider>
    </View>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "white",
    primary: 'white',
  }
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
},
})