import React from "react";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./home_screen";
import { RestaurantDetails } from "./rest_detail_screen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const HomeStack = createStackNavigator()
const tabHiddenRoutes = ["ResDetailScreen"];
export const HomeStackNavigator = ({ navigation, route }) => {

    React.useLayoutEffect(() => {
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: 'flex' } });
        }
    }, [navigation, route]);

    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalFadeTransition
            }}
        >
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="ResDetailScreen" component={RestaurantDetails} />
        </HomeStack.Navigator>
    )
}