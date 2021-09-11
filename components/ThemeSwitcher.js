import React, { useContext, useEffect } from "react";
import { StatusBar } from "react-native";
import { Toggle, ThemeContext } from "react-native-magnus";

import AsyncStorage from '@react-native-async-storage/async-storage';

import THEMES from "./themes";

export default function ThemeSwitcher() {
  const loadTheme = async() => {
    console.log("loading");
    try{
        let storedtheme = await AsyncStorage.getItem("UserTheme")
        if (storedtheme == "purple" | storedtheme == null)
        {
            setTheme(THEMES.purple)
        }
        else if(storedtheme=="blue")
        {
            setTheme(THEMES.blue)
        }
    } catch (err){
      alert(err);
    }
  };

  useEffect(()=>{
    loadTheme();
  }, []);
  
  
  const { theme, setTheme } = useContext(ThemeContext);
  /**
   * changes the theme on toggle press
   * if the theme is purple, set theme to blue
   * else to purple
   */
  const onToggle = () => {
    if (theme.name === "purple") {
      setTheme(THEMES.blue);
      StatusBar.setBarStyle("light-content");
      saveTheme("blue");
    } else {
      setTheme(THEMES.purple);
      StatusBar.setBarStyle("light-content");
      saveTheme("purple");
    }
  };

  const saveTheme = async(StorageTheme) => {
    try{
        await AsyncStorage.setItem("UserTheme", StorageTheme);
    } catch (err){
      alert(err);
    }
  };
  return <Toggle on={theme.name === "purple"} onPress={onToggle} />;
}