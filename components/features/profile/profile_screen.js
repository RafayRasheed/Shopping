import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Spacer } from "../../common,componenrs/common";
import { myColors } from "../../utils/my_colors";
import { fontSizes, fonts } from "../../utils/my_fonts";
import { List } from "react-native-paper";
export const ProfileScreen = () => {
    const [expLan, setExpLan] = useState(false)
    const [expFeed, setExpFeed] = useState(false)
    const [expRate, setExpRate] = useState(false)
    const [expVer, setExpVer] = useState(false)

    return (
        <SafeAreaView style={styles.container}>

            <Spacer paddingT={responsiveScreenHeight(6)} />
            {/* Personal Info */}
            <View style={styles.containerInfo}>
                {/* Persom */}
                <Image style={styles.imagePer} source={require('../../assets/home/rafay2.jpg')} />
                {/* Name & Email */}
                <View style={styles.containerNameAEmail}>
                    <Text style={styles.textName} numberOfLines={1}>Rafay Rasheed</Text>
                    <Text style={styles.textEmail} numberOfLines={1}>rafayrasheed777.rr@gmail.com</Text>
                </View>
                {/* Bell */}
                <View style={styles.containerBell}>
                    <Text style={styles.textNum}>2</Text>
                    <Image style={styles.imgBell} source={require('../../assets/profile/bell.png')} />
                    {/* <View>
                    </View> */}
                </View>
            </View>

            <Spacer paddingT={responsiveScreenHeight(4)} />
            {/* Settings */}
            <View style={styles.containerSetting}>
                <Image style={styles.imageAcc} source={require('../../assets/profile/acc.png')} />
                <Text style={styles.textAcc}>Account Setting</Text>
                <Image style={styles.imgEdit} source={require('../../assets/profile/edit.png')} />
            </View>

            <Spacer paddingT={responsiveScreenHeight(4)} />
            {/* List */}
            <View style={styles.containerList}>
                <List.Accordion
                    theme={styles.onExpendTheme}
                    style={styles.expendedList}
                    titleStyle={styles.listHeading}
                    title='Language'
                    onPress={() => { 
                        setExpLan(!expLan)
                    }}
                    onExpendTheme={styles.onExpendTheme}
                    left={() => <Image style={styles.imgIcon}
                        source={require('../../assets/profile/lang.png')} />}
                    right={() => <Image style={[styles.imgArrow,{transform:expLan?[{rotate:'90deg'}]:[{rotate:'0deg'}]}]}
                        source={require('../../assets/profile/arrow2.png')} />}
                >
                    <List.Item titleStyle={styles.textInside} title={'Language'}></List.Item>
                </List.Accordion>
                <List.Accordion
                    theme={styles.onExpendTheme}
                    style={styles.expendedList}
                    titleStyle={styles.listHeading}
                    title='Feedback'
                    onPress={() => { 
                        setExpFeed(!expFeed)
                    }}
                    onExpendTheme={styles.onExpendTheme}
                    left={() => <Image style={styles.imgIcon}
                        source={require('../../assets/profile/feedb.png')} />}
                    right={() => <Image style={[styles.imgArrow,{transform:expFeed?[{rotate:'90deg'}]:[{rotate:'0deg'}]}]}
                        source={require('../../assets/profile/arrow2.png')} />}
                >
                    <List.Item titleStyle={styles.textInside} title={'Feedback'}></List.Item>
                </List.Accordion>
                <List.Accordion
                    theme={styles.onExpendTheme}
                    style={styles.expendedList}
                    titleStyle={styles.listHeading}
                    title='Rate Us'
                    onPress={() => { 
                        setExpRate(!expRate)
                    }}
                    onExpendTheme={styles.onExpendTheme}
                    left={() => <Image style={styles.imgIcon}
                        source={require('../../assets/profile/rate.png')} />}
                    right={() => <Image style={[styles.imgArrow,{transform:expRate?[{rotate:'90deg'}]:[{rotate:'0deg'}]}]}
                        source={require('../../assets/profile/arrow2.png')} />}
                >
                    <List.Item titleStyle={styles.textInside} title={'Rate Us'}></List.Item>
                </List.Accordion>
                <List.Accordion
                    theme={styles.onExpendTheme}
                    style={styles.expendedList}
                    titleStyle={styles.listHeading}
                    title='New Version'
                    onPress={() => { 
                        setExpVer(!expVer)
                    }}
                    onExpendTheme={styles.onExpendTheme}
                    left={() => <Image style={styles.imgIcon}
                        source={require('../../assets/profile/version.png')} />}
                    right={() => <Image style={[styles.imgArrow,{transform:expVer?[{rotate:'90deg'}]:[{rotate:'0deg'}]}]}
                        source={require('../../assets/profile/arrow2.png')} />}
                >
                    <List.Item titleStyle={styles.textInside} title={'New Version'}></List.Item>
                </List.Accordion>
            </View>

            <Spacer paddingT={responsiveScreenHeight(4)} />
            {/* Logout */}
            <Text style={styles.textLog}>Logout</Text>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: responsiveScreenWidth(6.4),
        backgroundColor: myColors.background,
    },
    containerInfo: {
        paddingHorizontal: responsiveScreenWidth(5),
        paddingVertical: responsiveScreenHeight(1.5),
        elevation: 1.5,
        backgroundColor: myColors.background,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: responsiveScreenWidth(3)
    },
    containerBell: {
        justifyContent: 'center', alignItems: 'center',
        borderRadius: responsiveScreenHeight(3), backgroundColor: myColors.backgroundL,
        padding: responsiveScreenHeight(1.2),
    },
    containerNameAEmail: {
        flex: 1, marginHorizontal: responsiveScreenWidth(3)
    },
    containerSetting: {
        paddingHorizontal: responsiveScreenWidth(5),
        paddingVertical: responsiveScreenHeight(2.5),
        elevation: 1.5,
        backgroundColor: myColors.background,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: responsiveScreenWidth(3)
    },
    containerLog: {
        paddingHorizontal: responsiveScreenWidth(2.5),
        paddingVertical: responsiveScreenHeight(2),
        backgroundColor: myColors.red,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveScreenWidth(3)
    },
    containerList: {
        paddingStart: responsiveScreenWidth(3),
        paddingEnd: responsiveScreenWidth(1),
        backgroundColor: myColors.background,
        borderRadius: responsiveScreenWidth(3),
        elevation: 1
    },

    // Image -------------------------------------------------------
    imagePer: {
        resizeMode: 'contain', height: responsiveScreenHeight(5.4), width: responsiveScreenHeight(5.4),
        borderRadius: responsiveScreenHeight(3), borderWidth: 1, borderColor: myColors.offColor,
    },
    imgBell: {
        resizeMode: 'contain', height: responsiveScreenHeight(2.5), width: responsiveScreenHeight(2.5),
    },
    imageAcc: {
        resizeMode: 'contain', height: responsiveScreenHeight(3), width: responsiveScreenHeight(3),
    },
    imgEdit: {
        resizeMode: 'contain', height: responsiveScreenHeight(2.5), width: responsiveScreenHeight(2.5),
    },


    // Text --------------------------------------------------------
    textNum: {
        position: 'absolute', zIndex: 1, top: -responsiveScreenHeight(0.4), right: -responsiveScreenHeight(0),
        backgroundColor: myColors.red, paddingHorizontal: responsiveScreenWidth(1.3),
        borderRadius: responsiveScreenWidth(10), fontFamily: fonts.headingBold, fontSize: fontSizes.tiny,
        color: myColors.background,
    },
    textName: {
        fontFamily: fonts.heading, fontSize: fontSizes.medium, color: myColors.text,
    },
    textEmail: {
        fontFamily: fonts.bodyBold, fontSize: fontSizes.tiny, color: myColors.textL,
    },
    textAcc: {
        fontFamily: fonts.body, fontSize: fontSizes.xMedium, color: myColors.text,
        flex: 1, paddingHorizontal: responsiveScreenWidth(2)
    },
    textLog: {
        alignSelf: 'center',
        width: responsiveScreenWidth(30),
        height: responsiveScreenHeight(4.5),
        backgroundColor: myColors.red,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: responsiveScreenWidth(3),
        fontFamily: fonts.heading, fontSize: fontSizes.medium, color: myColors.background,
    },

    //List -------------------------------------------------------
    expendedList: {
        paddingHorizontal: responsiveScreenWidth(3),
        borderColor: myColors.red,
    },
    onExpendTheme: {
        colors: { primary: myColors.primary }
    },
    listHeading: {
        fontFamily: fonts.body, fontSize: fontSizes.xMedium, color: myColors.text,
        paddingStart: responsiveScreenWidth(3)
    },
    textInside: {
        color: myColors.black,
        fontFamily: fonts.heading,
        alignSelf: 'center'
    },
    imgIcon: {
        resizeMode: 'contain', height: responsiveScreenHeight(2.5), width: responsiveScreenHeight(2.5),
    },
    imgArrow: {
        resizeMode: 'contain', height: responsiveScreenHeight(3), width: responsiveScreenHeight(1.5),
    }

})