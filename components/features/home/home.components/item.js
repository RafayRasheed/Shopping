import React from "react"
import { Image, StyleSheet } from "react-native"
import { View } from "react-native"
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions"
import { myColors } from "../../../utils/my_colors"
import { fontSizes, fonts } from '../../../utils/my_fonts';
import { Text } from "react-native"


export const Item = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <Image style={styles.image} source={item.image} />

                {/* Text Portion */} 
                <View>
                    <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                    <View style={styles.containerLocation}>
                        <Image style={styles.imageLoc}
                            source={require('../../../assets/home/location.png')} />
                        <Text style={styles.textLoc}>{item.location}</Text>
                    </View>
                </View>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(40),
        height: responsiveScreenHeight(24),
        marginStart: responsiveScreenWidth(3.2),
        borderRadius: responsiveScreenWidth(4),
        backgroundColor: myColors.background,
        elevation: 1,
    },
    containerItems: {
        margin: responsiveScreenHeight(1.23),
        marginBottom: responsiveScreenHeight(2.5),
        flex: 1,
        justifyContent: 'space-between',
    },
    containerLocation: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    textName: {
        fontFamily: fonts.heading, fontSize: fontSizes.medium, color: myColors.text,

    },
    textLoc: {
        fontFamily: fonts.medium, fontSize: fontSizes.tiny, color: myColors.textL,
        width: '89%'
    },
    image: {
        width: '100%', height: '62%', borderTopLeftRadius: responsiveScreenWidth(3),
        borderTopRightRadius: responsiveScreenWidth(3), resizeMode: 'contain'
    },
    imageLoc: {
        width: responsiveScreenWidth(2.5), height: responsiveScreenHeight(1.4),
        resizeMode: 'contain', marginTop: responsiveScreenHeight(0.2)

    }
})