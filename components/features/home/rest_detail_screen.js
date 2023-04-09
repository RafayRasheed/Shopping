import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { myColors } from "../../utils/my_colors";
import { View } from "react-native";
import { Dimensions, BackHandler } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Spacer, StatusPrimary } from "../../common,componenrs/common";
import { Image } from "react-native";
import { fontSizes, fonts } from "../../utils/my_fonts";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

const { height, width } = Dimensions.get('window')
export const RestaurantDetails = ({ navigation, route }) => {

    const { restaurant } = route.params
    const [time, setTime] = useState(null)
    const d = new Date();
    const day = d.getDay()
    useEffect(() => {
        restaurant.dayTime.map((dT) => {
            if (dT[day]) {
                setTime(dT[day])
                return
            }
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusPrimary />
            {/* Top */}
            <View style={styles.containerTop}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                    <Image style={styles.imgArrow} source={require('../../assets/home/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.textTop}>Details Restaurant</Text>
            </View>

            <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: myColors.backgroundL }}>

                <Spacer paddingT={responsiveScreenHeight(1)} />
                {/* Detail Container */}
                <View style={styles.containerDetail}>
                    {/* Name */}
                    <Text numberOfLines={1} style={styles.textName}>{restaurant.name}</Text>

                    {/* Location */}
                    <View style={styles.containerLocation}>
                        <Image style={styles.imageLoc}
                            source={require('../../assets/home/location.png')} />
                        <Text numberOfLines={1} style={styles.textLoc}> {restaurant.location}</Text>
                    </View>

                    <Spacer paddingT={responsiveScreenHeight(2)} />
                    {/* Image */}
                    <Image style={styles.imgRest} source={restaurant.image} />

                    <Spacer paddingT={responsiveScreenHeight(2)} />
                    {/* Loc & Time */}
                    <View style={styles.containerLocAndTime}>
                        <View>
                            {/* Open */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.imageDirection}
                                    source={time ? require('../../assets/home/res_detail/clockO.png') : require('../../assets/home/res_detail/clockC.png')} />
                                <Text numberOfLines={1} style={styles.textStatus}> {time ? 'Open Today' : 'Close Today'}</Text>
                            </View>

                            <Spacer paddingT={responsiveScreenHeight(0.5)} />
                            {/* Timings */}
                            {time && <Text numberOfLines={1} style={styles.textTiming}>{time}</Text>}

                        </View>
                        {/* Location */}
                        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row' }}>
                            <Image style={styles.imageDirection}
                                source={require('../../assets/home/res_detail/direction.png')} />
                            <Text numberOfLines={1} style={styles.textDirection}>   Visit the Restaurant</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

            {/* Bottom */}
            <View style={styles.containerBottom}>
                <TouchableOpacity activeOpacity={0.8} style={styles.containerButton}>
                    <Text style={styles.textButton}>Booking</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.backgroundL,
    },
    containerTop: {
        height: responsiveScreenHeight(5.6),
        backgroundColor: myColors.primary,
        borderBottomStartRadius: responsiveScreenHeight(2),
        borderBottomEndRadius: responsiveScreenHeight(2),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
    },
    containerBottom: {
        height: responsiveScreenHeight(10),
        backgroundColor: myColors.background,
        borderTopStartRadius: responsiveScreenHeight(2.5),
        borderTopEndRadius: responsiveScreenHeight(2.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDetail: {
        paddingHorizontal: responsiveScreenWidth(4.5),
        paddingVertical: responsiveScreenHeight(2.4),
        backgroundColor: myColors.background,
        borderRadius: responsiveScreenHeight(2.5),

    },
    containerLocation: {
        flexDirection: 'row', alignItems: 'center'
    },
    containerLocAndTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: responsiveScreenWidth(3.2),

    },
    containerButton:{
        width:responsiveScreenWidth(62),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:myColors.primary,
        borderRadius:responsiveScreenWidth(3),
        paddingVertical:responsiveScreenHeight(1),
    },

    imgArrow: {
        height: responsiveScreenHeight(3),
        width: responsiveScreenHeight(3),
        resizeMode: 'contain'
    },
    imageLoc: {
        width: responsiveScreenWidth(3.5), height: responsiveScreenHeight(2.5),
        resizeMode: 'contain', marginTop: responsiveScreenHeight(0.2)

    },
    imgRest: {
        height: responsiveScreenHeight(22),
        width: responsiveScreenWidth(90),
        resizeMode: 'cover',
        borderRadius: responsiveScreenHeight(1),
        alignSelf: 'center'
    },
    imageDirection: {
        height: responsiveScreenHeight(2),
        width: responsiveScreenHeight(2),
        resizeMode: 'contain',
    },

    textTop: {
        width: '87%',
        textAlign: 'center',
        fontFamily: fonts.heading,
        fontSize: fontSizes.XSmall,
        color: myColors.background,
    },
    textName: {
        fontFamily: fonts.heading, fontSize: fontSizes.large, color: myColors.text,
    },
    textLoc: {
        fontFamily: fonts.body, fontSize: fontSizes.small, color: myColors.textL,
    },
    textDirection: {
        fontFamily: fonts.heading, fontSize: fontSizes.small, color: myColors.blue,
    },
    textStatus: {
        fontFamily: fonts.bodyBold, fontSize: fontSizes.small, color: myColors.textL,
    },

    textTiming: {
        fontFamily: fonts.heading, fontSize: fontSizes.small, color: myColors.text,
    },
    textButton:{
        fontFamily: fonts.heading, fontSize: fontSizes.XSmall, color: myColors.background,
    }




})