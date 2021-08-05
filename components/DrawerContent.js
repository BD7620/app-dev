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
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <PaperProvider theme={theme}>
            <List.Section title="Breathing">
              
              <List.Accordion
                title="Stress/Anxiety"
                left={props => <List.Icon {...props} icon="head-snowflake" theme={theme} />}>
                <DrawerItem 
                  label="Exercise 1"
                  onPress={() => { /*props.navigation.navigate('')*/ }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Exercise 2"
                  onPress={() => { /*props.navigation.navigate('LungHub')*/ }}
                  inactiveTintColor='white'
                />
              </List.Accordion>


              <List.Accordion
                title="Lungs"
                left={props => <List.Icon {...props} icon="lungs" theme={theme} />}>
                <DrawerItem 
                  label="Exercise 1"
                  onPress={() => { /*props.navigation.navigate('')*/ }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Exercise 2"
                  onPress={() => { /*props.navigation.navigate('LungHub')*/ }}
                  inactiveTintColor='white'
                />
              </List.Accordion>

              <List.Accordion
                title="Sleep"
                left={props => <List.Icon {...props} icon="sleep" theme={theme} />}>
                <DrawerItem 
                  label="Exercise 1"
                  onPress={() => { /*props.navigation.navigate('')*/ }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Exercise 2"
                  onPress={() => { /*props.navigation.navigate('LungHub')*/ }}
                  inactiveTintColor='white'
                />
              </List.Accordion>

              <List.Accordion
                title="Sports Performance"
                left={props => <List.Icon {...props} icon="soccer" theme={theme} />}>
                <DrawerItem 
                  label="Exercise 1"
                  onPress={() => { /*props.navigation.navigate('')*/ }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Exercise 2"
                  onPress={() => { /*props.navigation.navigate('LungHub')*/ }}
                  inactiveTintColor='white'
                />
              </List.Accordion>

              <List.Accordion
                title="Singing"
                left={props => <List.Icon {...props} icon="music" theme={theme} />}>
                <DrawerItem 
                  label="Exercise 1"
                  onPress={() => { /*props.navigation.navigate('')*/ }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Exercise 2"
                  onPress={() => { /*props.navigation.navigate('LungHub')*/ }}
                  inactiveTintColor='white'
                />
              </List.Accordion>
            </List.Section>

            <List.Section title="Info">
              <List.Accordion
                title="Food/Drink"
                left={props => <List.Icon {...props} icon="food" theme={theme} />}>
                <DrawerItem 
                  label="Exercise 1"
                  onPress={() => { /*props.navigation.navigate('')*/ }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Exercise 2"
                  onPress={() => { /*props.navigation.navigate('LungHub')*/ }}
                  inactiveTintColor='white'
                />
              </List.Accordion>

              <List.Accordion
                title="Sleep"
                left={props => <List.Icon {...props} icon="sleep" theme={theme} />}>
                <DrawerItem 
                  label="Exercise 1"
                  onPress={() => { /*props.navigation.navigate('')*/ }}
                  inactiveTintColor='white'
                />
                <DrawerItem 
                  label="Exercise 2"
                  onPress={() => { /*props.navigation.navigate('LungHub')*/ }}
                  inactiveTintColor='white'
                />
              </List.Accordion>

              
            </List.Section>
          </PaperProvider>
        </View>
      </DrawerContentScrollView>

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
    /*borderBottomColor:'#C2B8DB',
    borderBottomWidth: 1,*/
  },
})