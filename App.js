import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Navigator } from './components/navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    heading1: require("./assets/fonts/inter/Inter-Bold.ttf"),
    heading: require("./assets/fonts/inter/Inter-SemiBold.ttf"),
    body: require("./assets/fonts/inter/Inter-Regular.ttf"),
    bodyBold: require("./assets/fonts/inter/Inter-Medium.ttf"),
  });

  if(!fontsLoaded){
    return null
  }
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}