import React, { useState } from "react";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./home_screen";
import { RestaurantDetails } from "./rest_detail_screen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StatusPrimary, StatusWhite } from "../../common,componenrs/common";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { myColors } from "../../utils/my_colors";

const HomeStack = createStackNavigator()
const tabHiddenRoutes = ["ResDetailScreen"];
export const HomeStackNavigator = ({ navigation, route }) => {
    const [isWhite, setsWhite] = useState(true)

    React.useLayoutEffect(() => {
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } });
            setsWhite(false)
        } else {
            navigation.setOptions({
                tabBarStyle: {
                    borderTopLeftRadius: responsiveScreenWidth(8),
                    borderTopRightRadius: responsiveScreenWidth(8),
                    backgroundColor: myColors.background,
                    height: responsiveScreenHeight(7.8),
                }
            });
            setsWhite(true)
        }
    }, [navigation, route]);

    return (
        <>
            {isWhite?<StatusWhite/>:<StatusPrimary/>}
            <HomeStack.Navigator
                screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.ModalFadeTransition
                }}
            >
                <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
                <HomeStack.Screen name="ResDetailScreen" component={RestaurantDetails} />
            </HomeStack.Navigator>

        </>
    )
}