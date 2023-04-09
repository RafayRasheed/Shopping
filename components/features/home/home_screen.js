import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { myColors } from '../../utils/my_colors';
import { Spacer, StatusWhite } from '../../common,componenrs/common';
import { fontSizes, fonts } from '../../utils/my_fonts';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { foods, offers, restaurants } from './home.components/data';
import { Item } from './home.components/item';
import { Restuarant } from './home.components/restaurant';
import { RestaurantDetails } from './rest_detail_screen';


const HeadingRow = ({ head, des, onClick }) => (
    <View style={styles.containerHeadingRow}>
        <View>
            <Text style={styles.textHeadingRow}>{head}</Text>
            <Text style={styles.textDesRow}>{des}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => onClick()}>
            <Text style={styles.textDesRow}>See All <Image source={require("../../assets/home/go.png")} /></Text>
        </TouchableOpacity>
    </View>
)

function onNewArrival() {
    console.log('ok New')
}

function onBookRes() {
    console.log('ok Book')
}

export const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState(null)
    const [i, setI] = useState(0)
    const dotArr = []
    const offerWidthSScroll = responsiveScreenWidth(76.5)
    const lenOffers = Object.keys(offers).length
   

    // Loop for dots
    for (let j = 0; j < lenOffers; j++) {
        dotArr.push(<View key={j} style={[styles.containerDot, { backgroundColor: j == i ? myColors.primary : myColors.dot, }]} />)
    }

    //Offer Scroll
    function handleScroll(event) {

        const a = (event.nativeEvent.contentOffset.x) / offerWidthSScroll
        let b = Math.round(a)
        if (i != b && b < lenOffers) {
            setI(b)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusWhite />
            {/* Top Location & pic */}
            {/* <RestaurantDetails /> */}
            <View style={styles.containerTop}>
                {/* I bar */}
                <Image style={styles.imageBar} source={require('../../assets/home/bar.png')} />
                {/* Location */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imageLoc} source={require('../../assets/home/location.png')} />
                    <Text style={styles.textLoc}>Agrabad 435, Chittagong</Text>
                </View>
                {/* I Persom */}
                <Image style={styles.imagePer} source={require('../../assets/home/rafay2.jpg')} />
            </View>

            <Spacer paddingT={responsiveScreenHeight(1.5)} />

            {/* Search */}
            <View style={styles.containerSearch}>
                <Spacer paddingEnd={'9.6%'} />
                <Image style={styles.imageSearch} source={require('../../assets/home/search.png')} />
                <Spacer paddingEnd={'2.14%'} />
                <TextInput placeholder="Search"
                    placeholderTextColor={myColors.offColor}
                    style={styles.containerInputSearch} cursorColor={myColors.primary}
                    value={search} onChangeText={setSearch}
                />
            </View>

            <Spacer paddingT={responsiveScreenHeight(0.5)} />
            <ScrollView
                contentContainerStyle={{ paddingVertical: responsiveScreenHeight(1.5) }}>
                <Spacer paddingT={responsiveScreenHeight(1.7)} />
                {/* Offers & Dots */}
                <View>
                    <ScrollView
                        onScroll={handleScroll}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow: 1, justifyContent: 'center',
                            paddingHorizontal: responsiveScreenWidth(10)
                        }}
                        pagingEnabled
                        snapToInterval={offerWidthSScroll}
                        // snapToAlignment={"center"}
                        scrollEventThrottle={1}
                    >
                        {offers.map((item, i) =>
                            <View key={i}>
                                {/* Offers */}
                                <LinearGradient
                                    colors={item.colors} style={styles.containerOffer}
                                    // for horizontal
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                >
                                    {/* Content Offers */}
                                    <View style={{ maxWidth: '45%', paddingStart: '7.1%', justifyContent: 'center' }}>
                                        <Image style={styles.imgOfferLogo} source={item.logo} />
                                        {/* <Spacer paddingT={responsiveScreenHeight(0)} /> */}
                                        <Text style={styles.textOfferTitle}>{item.title}</Text>
                                        <Text numberOfLines={2} style={styles.textOfferDes}>{item.des}</Text>
                                        <Spacer paddingT={responsiveScreenHeight(0.5)} />
                                        <TouchableOpacity activeOpacity={0.8}
                                            style={{ flexDirection: 'row', alignItems: 'center' }}
                                            onPress={() => null}>
                                            <Text style={styles.textOfferOrder}>Order <Image style={styles.imgOfferGo} source={require('../../assets/home/offer/goSmall.png')} /></Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Image Offers */}
                                    <Image style={styles.imgOffer} source={item.image} />
                                </LinearGradient>

                            </View>
                        )
                        }
                    </ScrollView>

                    <Spacer paddingT={responsiveScreenHeight(1.6)} />
                    {/*Dots */}
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        {dotArr}
                    </View>

                    <Spacer paddingT={responsiveScreenHeight(2.7)} />
                    {/* Heading Row */}
                    <HeadingRow head={'Today New Arivable'} des={'Best of the today  food list update'} onClick={onNewArrival} />

                    <Spacer paddingT={responsiveScreenHeight(1)} />
                    {/* New Arrival */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: responsiveScreenWidth(1.6) }}
                    >
                        {
                            foods.map((item, i) =>
                                <TouchableOpacity key={i} activeOpacity={0.8}>
                                    <Item item={item} />
                                </TouchableOpacity>
                            )
                        }

                    </ScrollView>

                    <Spacer paddingT={responsiveScreenHeight(2.8)} />
                    {/* Heading Row */}
                    <HeadingRow head={'Booking Restaurant'} des={'Check your city Near by Restaurant'} 
                    onClick={onBookRes} />

                    {/* Restaurants */}
                    <View style={styles.containerRes}>
                        {
                            restaurants.map((restaurant, i) =>
                                <TouchableOpacity key={i} activeOpacity={0.8} 
                                onPress={()=>navigation.navigate('ResDetailScreen', {restaurant})}>
                                    <Restuarant restaurant={restaurant} />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    // Containers
    container: {
        flex: 1, backgroundColor: myColors.background,


    },

    containerTop: {
        paddingHorizontal: responsiveScreenWidth(5.3),
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },

    containerSearch: {
        flexDirection: 'row',
        width: responsiveScreenWidth(75), alignSelf: "center",
        height: responsiveScreenHeight(4.43), borderRadius: responsiveScreenHeight(1.5),
        backgroundColor: myColors.searchbar, alignItems: 'center',
    },

    containerInputSearch: {
        flex: 1,
        height: responsiveScreenHeight(4.43),
        backgroundColor: myColors.searchbar,
        fontSize: fontSizes.small, color: myColors.text, fontFamily: fonts.body, borderRadius: responsiveScreenHeight(1.5),
        paddingEnd: responsiveScreenWidth(4)
    },

    containerOffer: {
        flexDirection: 'row', justifyContent: 'space-between',
        width: responsiveScreenWidth(74.7), height: responsiveScreenHeight(14.7),
        borderRadius: responsiveScreenHeight(4.5), backgroundColor: '#FFE1B4',
        marginStart: responsiveScreenWidth(2), elevation: 1, overflow: 'hidden'
    },

    containerDot: {
        height: responsiveScreenHeight(1.1), width: responsiveScreenHeight(1.1),
        margin: 3, borderRadius: responsiveScreenHeight(0.6),
    },

    containerHeadingRow: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', paddingHorizontal: responsiveScreenWidth(4.5)
    },
    containerRes:{
        paddingVertical:responsiveScreenHeight(1)
    },

    // Images
    imageBar: {
        resizeMode: 'contain', height: responsiveScreenHeight(1.5), width: responsiveScreenWidth(4.2)
    },

    imageLoc: {
        resizeMode: 'contain', height: responsiveScreenHeight(2), width: responsiveScreenWidth(4.2),
    },

    imagePer: {
        resizeMode: 'contain', height: responsiveScreenHeight(4), width: responsiveScreenHeight(4),
        borderRadius: responsiveScreenHeight(2), borderWidth: 1, borderColor: myColors.offColor,
    },

    imageSearch: {
        height: responsiveScreenHeight(2),
        width: responsiveScreenHeight(2), resizeMode: 'contain'
    },

    imgOfferLogo: {
        maxHeight: responsiveScreenHeight(3.7), maxWidth: responsiveScreenHeight(3.7), resizeMode: 'contain'
    },

    imgOfferGo: {
        maxHeight: responsiveScreenHeight(1.25), maxWidth: responsiveScreenHeight(1.25), resizeMode: 'contain'
    },

    imgOffer: {
        width: '55%', height: '100%', alignItems: 'center', resizeMode: 'cover',
    },


    // Text
    textLoc: {
        paddingHorizontal: responsiveScreenWidth(1), fontFamily: fonts.bodyBold, fontSize: fontSizes.small, color: myColors.textL2,
    },
    textOfferTitle: {
        fontFamily: fonts.headingBold, fontSize: fontSizes.medium, color: myColors.background,
    },
    textOfferDes: {
        fontFamily: fonts.bodyBold, fontSize: fontSizes.veryTinyHalf, color: myColors.background,
    },
    textOfferOrder: {
        fontFamily: fonts.headingBold, fontSize: fontSizes.veryTiny, color: myColors.background,
    },
    textHeadingRow: {
        fontFamily: fonts.heading, fontSize: fontSizes.medium, color: myColors.text,
    },
    textDesRow: {
        fontFamily: fonts.bodyBold, fontSize: fontSizes.small, color: myColors.textL,
    },



})