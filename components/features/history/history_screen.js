import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { myColors } from "../../utils/my_colors";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { fontSizes, fonts } from "../../utils/my_fonts";
import { SafeAreaView } from "react-native";
import { Spacer } from "../../common,componenrs/common";
import { useSelector } from "react-redux";
import { Restuarant } from "../home/home.components/restaurant";

export const HistoryScreen = () => {
    const { history } = useSelector(state => state.history)
    function onCheck() { }
    return (
        <SafeAreaView style={styles.container}>
            {/* Top */}
            <View style={styles.containerTop}>
                <Text style={styles.textTop}>Booking History</Text>
            </View>

            {history.length?
                <View>
                    <Spacer paddingT={responsiveScreenHeight(1.6)} />
                    {/* History */}
                    {history.map((restaurant, i) => <Restuarant key={i} restaurant={restaurant} onCheck={onCheck} />)}

                    <Spacer paddingT={responsiveScreenHeight(1.5)} />
                    {/* Button */}
                    <TouchableOpacity style={styles.containerButton} activeOpacity={0.8} onPress={() => null}>
                        <Image source={require('../../assets/history/plus.png')} />
                        <Text style={styles.textButton}>  Booking more</Text>
                    </TouchableOpacity>
                </View> :
                <Text style={styles.textHistory}>No History</Text>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
    },
    containerTop: {
        height: responsiveScreenHeight(6.6), backgroundColor: myColors.primary,
        borderBottomStartRadius: responsiveScreenHeight(2), borderBottomEndRadius: responsiveScreenHeight(2),
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    containerButton: {
        flexDirection: 'row', borderRadius: responsiveScreenWidth(3), backgroundColor: myColors.background,
        elevation: 1.5, alignSelf: 'center', alignItems: 'center', justifyContent: 'center',
        paddingHorizontal: responsiveScreenWidth(6.4), paddingVertical: responsiveScreenHeight(1.5)
    },

    // Text --------------------------------------------------------------
    textTop: {
        fontFamily: fonts.heading, fontSize: fontSizes.medium, color: myColors.background,
    },
    textButton: {
        fontFamily: fonts.bodyBold, fontSize: fontSizes.medium, color: myColors.textL,
    },
    textHistory:{
        flex:1, textAlign:'center', textAlignVertical:'center',
        fontFamily: fonts.bodyBold, fontSize: fontSizes.large, color: myColors.textL,
    }

})