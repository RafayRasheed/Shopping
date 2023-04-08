import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar } from "react-native";
import { Image } from "react-native";
import { myColors } from "../../utils/my_colors";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import {Ionicons} from "@expo/vector-icons"
import { HomeScreen } from "./home_screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator()

const Icons={
    Home: 'md-home-outline',
    History:  'md-newspaper-outline',
    Profile:  'md-person-outline',
}
  const screenOptions =({route}) => {
    const iconName=Icons[route.name]
    return{
      tabBarActiveTintColor:myColors.primary,
      tabBarInactiveTintColor:myColors.textL2,
      tabBarIcon: ({color, size }) => <Ionicons name={iconName} size={responsiveScreenHeight(3)} color={color} />,
      tabBarShowLabel:false,
      tabBarStyle: {
          borderTopLeftRadius: responsiveScreenWidth(5.3),
          borderTopRightRadius: responsiveScreenWidth(5.3),
          backgroundColor: myColors.background,
          height:responsiveScreenHeight(7.8) ,
      },
    }
  }
const Xr=()=>(
    <View style={{flex:1, backgroundColor:myColors.background}}>
        <StatusBar style="auto"/>
      <Text style={{}}>HomeStack!</Text>
    </View>
)


export const HomeNavigator=()=>{
    return(
      <>
        {/* <Xr/>/ */}
        <Tab.Navigator
          tabBarActiveTintColor={myColors.primary}
          headerShown={false}
          screenOptions={screenOptions}
          shifting={false}
          tabBarShowLabel={false}>

          
          <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
          <Tab.Screen name="History" component={Xr}  options={{headerShown: false}}/>
          <Tab.Screen name="Profile" component={Xr} options={{headerShown: false}}/>



        </Tab.Navigator>
      </>

    )
}