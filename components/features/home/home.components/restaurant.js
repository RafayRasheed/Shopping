import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { myColors } from "../../../utils/my_colors";
import { Image } from "react-native";
import { fontSizes, fonts } from "../../../utils/my_fonts";
import { Spacer } from "../../../common,componenrs/common";
import { TouchableOpacity } from "react-native";

export const Restuarant = ({ restaurant, onCheck, navigate }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={restaurant.image} />
            {/* Text Portion */}
            <View style={styles.containerDetail}>
                <Text numberOfLines={1} style={styles.textName}>{restaurant.name}</Text>
                <Spacer paddingT={responsiveScreenHeight(0.5)} />
                {/* Second row */}
                <View style={{ flexDirection: 'row' }}>
                    {/* Location */}
                    <View style={styles.containerLocation}>
                        <Image style={styles.imageLoc}
                            source={require('../../../assets/home/location.png')} />
                        <Text style={styles.textLoc}>{restaurant.location}</Text>
                    </View>
                    {/* Button */}
                    <TouchableOpacity onPress={() =>onCheck?onCheck(restaurant):navigate('ResDetailScreen',{restaurant})} activeOpacity={0.8} style={styles.containerButton}>
                        <Text style={styles.textButton}>{onCheck ? 'Check' : 'Book'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: responsiveScreenWidth(4.4),
        height: responsiveScreenHeight(10),
        backgroundColor: myColors.background,
        marginTop: responsiveScreenHeight(1),
        borderRadius: responsiveScreenWidth(3.5),
        elevation: 1,
        padding: responsiveScreenWidth(3.2),
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerDetail: {
        width: responsiveScreenWidth(63.2),
        marginStart: responsiveScreenWidth(5),
    },
    containerLocation: {
        flexDirection: 'row', alignItems: 'center'
    },
    containerButton: {
        backgroundColor: myColors.primary, alignItems: 'center',
        justifyContent: 'center', paddingHorizontal: responsiveScreenWidth(7.7),
        paddingVertical: responsiveScreenHeight(0.7), borderRadius: responsiveScreenWidth(2),
        marginEnd: responsiveScreenWidth(3.2)
    },
    image: {
        width: responsiveScreenHeight(7.5), height: responsiveScreenHeight(7.5),
        borderRadius: responsiveScreenWidth(2),
    },
    imageLoc: {
        width: responsiveScreenWidth(4), height: responsiveScreenHeight(2.5),
        resizeMode: 'contain', marginTop: responsiveScreenHeight(0.2)

    },
    textName: {
        fontFamily: fonts.heading, fontSize: fontSizes.medium, color: myColors.text,

    },
    textLoc: {
        fontFamily: fonts.body, fontSize: fontSizes.tiny, color: myColors.textL,
        width: responsiveScreenWidth(32), marginHorizontal: responsiveScreenWidth(1),
    },
    textButton: {
        fontFamily: fonts.heading, fontSize: fontSizes.small, color: myColors.background
    }


})