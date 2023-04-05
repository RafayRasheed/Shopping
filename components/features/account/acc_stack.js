import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import { AccScreen } from "./acc_screen";
import { ForgetPassword } from "./forget_p_screen";
import { DoneEmail } from "./done_email_screen";
import { DonePass } from "./done_pass_screen";
import { NewPass } from "./new_pass_screen";

const Xr=({navigation})=>(
    <View style={{flex:1}}>
        <StatusBar style="auto"/>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={{}}>AccountStack!</Text>
        </TouchableOpacity>
    </View>
)
const AccountStack = createStackNavigator()

export const AccountNavigator=()=>{
    return(
        <AccountStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}>
            <AccountStack.Screen
                name='Welcome'
                component={AccScreen}
            />
            <AccountStack.Screen
                name='ForgetPass'
                component={ForgetPassword}
            />
            <AccountStack.Screen
                name="DoneEmail"
                component={DoneEmail}
            />
            <AccountStack.Screen
                name="NewPass"
                component={NewPass}
            />
            <AccountStack.Screen
                name="DonePass"
                component={DonePass}
            />

        </AccountStack.Navigator>

    )
}