import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar } from "react-native";
import { Image } from "react-native";
import { myColors } from "../../utils/my_colors";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import {Ionicons} from "@expo/vector-icons"
import { HomeScreen } from "./home_screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator } from "./home_stack";
const Tab = createBottomTabNavigator()

const IconsOn={
    Home: require('../../assets/home/navigation/homeOn.png'),
    History:  require('../../assets/home/navigation/historyOn.png'),
    Profile:  require('../../assets/home/navigation/personOn.png'),
}
const IconsOff={
  Home: require('../../assets/home/navigation/homeOff.png'),
  History:  require('../../assets/home/navigation/historyOff.png'),
  Profile:  require('../../assets/home/navigation/personOff.png'),
}
  const screenOptions =({route}) => {
    const name=route.name
    return{
      tabBarActiveTintColor:myColors.primary,
      tabBarInactiveTintColor:myColors.textL2,
      tabBarIcon: ({color, size }) => <Image style={{width:responsiveScreenWidth(9),height:responsiveScreenHeight(4), resizeMode:'contain'}} 
        source= {color==myColors.primary?IconsOn[name]:IconsOff[name]}/>,
      tabBarShowLabel:false,
      tabBarStyle: {
          borderTopLeftRadius: responsiveScreenWidth(8),
          borderTopRightRadius: responsiveScreenWidth(8),
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

          <Tab.Screen name="Home" component={HomeStackNavigator}  
            options={{headerShown: false} }/>
          <Tab.Screen name="History" component={Xr}  options={{headerShown: false}}/>
          <Tab.Screen name="Profile" component={Xr} options={{headerShown: false}}/>

        </Tab.Navigator>
      </>

    )
}