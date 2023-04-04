import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar } from "react-native";

const Xr=()=>(
    <View style={{flex:1}}>
        <StatusBar style="auto"/>
      <Text style={{}}>HomeStack!</Text>
    </View>
)
const HomeStack = createStackNavigator()

export const HomeNavigator=()=>{
    return(
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalFadeTransition
            }}>
            <HomeStack.Screen
                name='Home'
                component={Xr}
            />
        </HomeStack.Navigator>

    )
}