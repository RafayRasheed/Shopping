import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar } from "react-native";
import { AccountNavigator } from "../features/account/acc_stack";
import { HomeNavigator } from "../features/home/home_navigator";
import { HomeScreen } from "../features/home/home_screen";
import { OnboardScreen } from "../features/onboard/onboard_screen";

const Xr=()=>(
    <View style={{flex:1}}>
        <StatusBar style="auto"/>
      <Text style={{}}>Open up Now!</Text>
    </View>
)
const AppNavigatorStack = createStackNavigator()
export const Navigator=()=>{
    return(
        <AppNavigatorStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}>
            <AppNavigatorStack.Screen
                name='OnboardStack'
                component={OnboardScreen}
            />
            <AppNavigatorStack.Screen
                name='HomeNavigator'
                component={HomeNavigator}
            />
             <AppNavigatorStack.Screen
                name='AccountStack'
                component={AccountNavigator}
            />
        </AppNavigatorStack.Navigator>

    )
}