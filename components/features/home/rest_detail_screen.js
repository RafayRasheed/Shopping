import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import { myColors } from "../../utils/my_colors";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Spacer } from "../../common,componenrs/common";
import { fontSizes, fonts } from "../../utils/my_fonts";
import { Restuarant } from "./home.components/restaurant";
import { restaurants } from "./home.components/data";
import { useDispatch, useSelector } from "react-redux";
import { addHistory, removeHistory } from "../../../redux/history_reducer";

export const RestaurantDetails = ({ navigation, route }) => {
    const [restaurant, setRestaurant] = useState(route.params.restaurant)
    const [time, setTime] = useState(null)
    const d = new Date();
    const day = d.getDay()
    const scrollRef = useRef();
    const { history } = useSelector(state => state.history)
    const book = history.find(it => it.id === restaurant.id)
    const otherRestaurants = restaurants.filter((rest) => rest.id != restaurant.id)
    const dispatch = useDispatch()

    function onBook() {
        if (book) {
            dispatch(removeHistory(restaurant))
        }
        else {
            dispatch(addHistory(restaurant))
        }
    }
    useEffect(() => {

    }, [history])
    useEffect(() => {
        restaurant.dayTime.map((dT) => {
            if (dT[day]) {
                setTime(dT[day])
                return
            }
        })
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });

    }, [restaurant])


    return (
        <SafeAreaView style={styles.container}>
            {/* Top */}
            <View style={styles.containerTop}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                    <Image style={styles.imgArrow} source={require('../../assets/home/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.textTop}>Details Restaurant</Text>
            </View>

            <ScrollView ref={scrollRef} contentContainerStyle={{ backgroundColor: myColors.backgroundL }}>

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

                <Spacer paddingT={responsiveScreenHeight(2)} />
                {/* Other Restaurant */}
                <View style={styles.containerOther}>
                    {/* Heading */}
                    <View style={styles.containerHeadingRow}>
                        <View>
                            <Text style={styles.textOtherHeading}>List other restaurant</Text>
                            <Text style={styles.textOtherRow}>check the menu at this restaurant</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => null}>
                            <Text style={styles.textSeeAll}>See All  <Image source={require("../../assets/home/res_detail/arrow.png")} /></Text>
                        </TouchableOpacity>
                    </View>

                    <Spacer paddingT={responsiveScreenHeight(1)} />
                    {/* <Restuarants */}
                    {
                        otherRestaurants.slice(0, 3).map((restaurant, i) =>
                            <TouchableOpacity key={i} activeOpacity={0.8}
                                onPress={() => setRestaurant(restaurant)}>
                                <Restuarant restaurant={restaurant} onCheck={setRestaurant} />
                            </TouchableOpacity>
                        )
                    }
                </View>

                <Spacer paddingT={responsiveScreenHeight(2)} />
            </ScrollView>

            {/* Bottom */}
            <View style={styles.containerBottom}>
                <TouchableOpacity onPress={() => onBook()} activeOpacity={0.8} style={styles.containerButton}>
                    <Text style={styles.textButton}>{book ? 'Booked' : 'Booking'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: myColors.backgroundL,
    },
    containerTop: {
        height: responsiveScreenHeight(5.6), backgroundColor: myColors.primary,
        borderBottomStartRadius: responsiveScreenHeight(2), borderBottomEndRadius: responsiveScreenHeight(2),
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: responsiveScreenWidth(3),
    },
    containerBottom: {
        height: responsiveScreenHeight(10), backgroundColor: myColors.background,
        borderTopStartRadius: responsiveScreenHeight(2.5), borderTopEndRadius: responsiveScreenHeight(2.5),
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    containerDetail: {
        paddingHorizontal: responsiveScreenWidth(4.5), paddingVertical: responsiveScreenHeight(2.4),
        backgroundColor: myColors.background, borderRadius: responsiveScreenHeight(2.5),
    },
    containerLocation: {
        flexDirection: 'row', alignItems: 'center'
    },
    containerLocAndTime: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingStart: responsiveScreenWidth(3.2),
    },
    containerButton: {
        width: responsiveScreenWidth(62), alignItems: 'center', justifyContent: 'center',
        backgroundColor: myColors.primary, borderRadius: responsiveScreenWidth(3), paddingVertical: responsiveScreenHeight(1),
    },
    containerHeadingRow: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', paddingHorizontal: responsiveScreenWidth(4.5)
    },
    containerOther: {
        paddingVertical: responsiveScreenHeight(2.4),
        backgroundColor: myColors.background, borderRadius: responsiveScreenHeight(2.5),
    },

    // Image --------------------------------------------------------------
    imgArrow: {
        height: responsiveScreenHeight(3), width: responsiveScreenHeight(3),
        resizeMode: 'contain'
    },
    imageLoc: {
        width: responsiveScreenWidth(3.5), height: responsiveScreenHeight(2.5),
        resizeMode: 'contain', marginTop: responsiveScreenHeight(0.2)
    },
    imgRest: {
        height: responsiveScreenHeight(22), width: responsiveScreenWidth(90),
        resizeMode: 'cover', borderRadius: responsiveScreenHeight(1), alignSelf: 'center'
    },
    imageDirection: {
        height: responsiveScreenHeight(2), width: responsiveScreenHeight(2),
        resizeMode: 'contain',
    },


    // Text ----------------------------------------------------------------
    textTop: {
        fontFamily: fonts.heading, fontSize: fontSizes.XSmall, color: myColors.background,
        width: '87%', textAlign: 'center',
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
    textButton: {
        fontFamily: fonts.heading, fontSize: fontSizes.XSmall, color: myColors.background,
    },
    textOtherHeading: {
        fontFamily: fonts.heading, fontSize: fontSizes.medium, color: myColors.text,
    },
    textOtherRow: {
        fontFamily: fonts.bodyBold, fontSize: fontSizes.small, color: myColors.textL,
    },
    textSeeAll: {
        fontFamily: fonts.heading, fontSize: fontSizes.small, color: myColors.primary,
    },


})