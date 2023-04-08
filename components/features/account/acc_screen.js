import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import { View, Text, Dimensions, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { height, percentH, percentW, Spacer, StatusTrans, StatusWhite, width } from "../../common,componenrs/common";
import { myColors } from "../../utils/my_colors";
import { fonts, fontSizes } from "../../utils/my_fonts";
import { Login } from "./acc.components/login";
import { CreateAcc } from "./acc.components/create_acc";


const WithdHor=width/1.5;

export const AccScreen=({navigation})=>{
    const [onAcc, setOnAcc]= useState(false)
    const [onLogin, setOnLogin]= useState(false)
    return(
        <View style={styles.container}>
            {onAcc?
                <>
                <StatusTrans/>
                <View style={{height,width, position:'absolute', zIndex:2, backgroundColor:myColors.backgroundTrans, justifyContent:'flex-end'}}>
                    <View style={{minHeight:responsiveScreenHeight(71),width, backgroundColor:myColors.background, borderTopStartRadius:36, borderTopEndRadius:36, alignItems:'center'}}>
                        <Spacer paddingT={responsiveScreenHeight(3)-7}/>
                        {/* Back line */}
                        <TouchableOpacity activeOpacity={0.6} style={{padding:7}} onPress={()=>setOnAcc(false)} >
                            <View style={{width:responsiveScreenWidth(12.8),height:5, borderRadius:20, backgroundColor:myColors.offColor4}}/>
                        </TouchableOpacity>

                        <Spacer paddingT={responsiveScreenHeight(5)-7}/>
                        {/* Navigator */}
                        <View style={{alignSelf:'flex-start',flexDirection:'row'}}>
                            <Spacer paddingEnd={responsiveScreenWidth(9.6)}/>
                            <View style={{flexDirection:'row',width:responsiveScreenWidth(63.5),justifyContent:'space-between'}}>
                                <TouchableOpacity activeOpacity={0.7} onPress={()=>setOnLogin(false)} style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize:fontSizes.medium,fontFamily:fonts.heading, color:onLogin?myColors.offColor2:myColors.primary}}>Create Account</Text>
                                    <Spacer paddingT={responsiveScreenHeight(1.3)}/>
                                    <View style={{width:'63%', height:3, backgroundColor:onLogin?myColors.background:myColors.primary}}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7} onPress={()=>setOnLogin(true)} style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize:fontSizes.medium,fontFamily:fonts.heading, color:onLogin?myColors.primary:myColors.offColor2}}>Login</Text>
                                    <Spacer paddingT={responsiveScreenHeight(1.3)}/>
                                    <View style={{width:'63%', height:3, backgroundColor:onLogin?myColors.primary:myColors.background}}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* <Spacer paddingT={responsiveScreenHeight(4.4)}/> */}
                        {onLogin?<Login navigate={navigation.replace}/>:<CreateAcc/>}
                        {/* <Spacer paddingT={responsiveScreenHeight(4)}/> */}

                    </View>
                </View>
                </>
            :<StatusWhite/>}
            <View style={{alignItems:'flex-end'}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>

                    <Image resizeMode="contain" style={{maxWidth:responsiveScreenWidth(75), 
                        maxHeight:responsiveScreenHeight(27.7)}} 
                        source={require('../../assets/account/welcome.png')}/>
                    
                    <Spacer paddingT={responsiveScreenHeight(8.5)}/>
                    {/* T Welcome */}
                    <Text style={styles.textWel}>Welcome</Text>
                    
                    <Spacer paddingT={responsiveScreenHeight(1)}/>
                    {/* T Detail */}
                    <Text style={styles.textDetail}>
                        Before enjoying Food media services Please register first</Text>

                    <Spacer paddingT={responsiveScreenHeight(11.7)}/>
                    {/* B Create Acc */}
                    <TouchableOpacity activeOpacity={0.8} style={[styles.bigButton, {backgroundColor:myColors.primary}]}
                        onPress={()=>{
                            setOnAcc(true)
                            setOnLogin(false)          
                        }}
                        >
                        <Text style={styles.textCreateAcc}>Create Account</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={responsiveScreenHeight(2)}/>
                    {/* B Create Login */}
                    <TouchableOpacity activeOpacity={0.8} style={[styles.bigButton, {backgroundColor:myColors.lightGree}]}
                        onPress={()=>{
                            setOnAcc(true)
                            setOnLogin(true)          
                        }}>
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={responsiveScreenHeight(2)}/>
                    {/* T Term & Policy */}
                    <Text style={styles.textTerm}>By logging in or registering, you have agreed to
                        <Text onPress={()=>null} style={{color:myColors.primary}}> The Terms and Conditions</Text> And 
                        <Text onPress={()=>null} style={{color:myColors.primary}}> Privacy Policy</Text>
                    </Text>
                </View>
                <Spacer paddingT={responsiveScreenHeight(7.6)}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',alignItems:'flex-end', 
        justifyContent:'center',backgroundColor:myColors.background,
        
    },

    textTerm:{
        maxWidth:responsiveScreenWidth(85),textAlign:'center', 
        color:myColors.text2, fontSize:fontSizes.tiny,
        textTransform:'capitalize',
    },

    bigButton:{
        width:responsiveScreenWidth(68), height:responsiveScreenHeight(6.1), 
        borderRadius:responsiveScreenHeight(1.47),justifyContent:'center',
        alignItems:'center',
    },
    textWel:{
        color:myColors.black, fontSize:fontSizes.xLarge, fontFamily:fonts.heading
    },
    textDetail:{
        maxWidth:responsiveScreenWidth(66.6), color:myColors.textL2, fontSize:fontSizes.XSmall, fontFamily:fonts.body, textTransform:'capitalize', textAlign:'center'
    },
    textCreateAcc:{
        color:myColors.background, fontSize:fontSizes.XSmall, fontFamily:fonts.headingBold,
    },
    textLogin:{
        color:myColors.primary, fontSize:fontSizes.XSmall, fontFamily:fonts.headingBold
    },




})