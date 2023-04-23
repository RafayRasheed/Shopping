import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { AccountNavigator } from "../features/account/acc_stack";
import { HomeNavigator } from "../features/home/home_navigator";
import { OnboardScreen } from "../features/onboard/onboard_screen";

const AppNavigatorStack = createStackNavigator()
export const Navigator=()=>{
    return(
        <AppNavigatorStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRiSghtIOS
            }}>
            <AppNavigatorStack.Screen
                name='OnboardStack'
                component={AccountNavigator}
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