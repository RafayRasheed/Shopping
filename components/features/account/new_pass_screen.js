import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { myColors } from "../../utils/my_colors";
import { fontSizes, fonts } from "../../utils/my_fonts";
import { Spacer, StatusWhite } from "../../common,componenrs/common";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 

export const NewPass=({navigation})=>{
    const [newPass, setNewPass]=useState()
    const [conPass, setConPass]=useState()
    const [verifyPass, setVerifyPass]=useState(false)
    
    function verifyNewPass(){
        if(newPass){
            return true
        }
        return false
    }
    function verifyConPass(){
        if(conPass){
            return true
        }
        return false
    }
    useEffect(()=>{
        if(verifyNewPass() && verifyConPass()){
            setVerifyPass(true)
        }
        else{
            setVerifyPass(false)
        }
    },[newPass, conPass])

    return(
        <>
            <StatusWhite/>
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1,justifyContent:'space-between',}} style={styles.container}>
                
                <View style={{paddingHorizontal:responsiveScreenWidth(6.4)}}>
                    <Spacer paddingT={responsiveScreenHeight(5.78)}/>

                    {/* T ForgetPass */}
                    <Text style={styles.textForget}>Change New Password</Text>
                    <Text style={[styles.textLight,{fontSize:fontSizes.XSmall}]}>Enter a different password with the previous</Text>
                    
                    <Spacer paddingT={responsiveScreenHeight(6.9)}/>
                    {/* New Pass */}
                    <View >
                        <Text style={[styles.heading,{color:newPass ?myColors.offColor:myColors.text}]}>New Password</Text>
                        <TextInput placeholder="*** *** ***" 
                            placeholderTextColor={myColors.offColor} 
                            style={styles.input} cursorColor={myColors.primary}
                            value={newPass} onChangeText={setNewPass}
                            onEndEditing={()=>verifyNewPass()}
                        />
                    </View>

                    <Spacer paddingT={responsiveScreenHeight(1)}/>
                    {/* Con Pass */}
                    <View >
                        <Text style={[styles.heading,{color:conPass?myColors.offColor:myColors.text}]}>Confirm Password</Text>
                        <TextInput placeholder="*** *** ***" 
                            placeholderTextColor={myColors.offColor} 
                            style={styles.input} cursorColor={myColors.primary}
                            value={conPass} onChangeText={setConPass}
                            onEndEditing={()=>verifyNewPass()}
                        />
                    </View>

                   

                </View>
                <View style={{alignItems:'center'}}>
                    {/* Button Submit */}
                    <TouchableOpacity onPress={()=>verifyPass?navigation.replace('DonePass'):null} activeOpacity={0.8} 
                        style={styles2(verifyPass).button}>
                        <Text style={styles2(verifyPass).textReg}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </>
    )
}

const styles=StyleSheet.create({
    heading:{
        paddingStart:responsiveScreenWidth(2.7), paddingVertical:responsiveScreenHeight(0.8),
        fontFamily:fonts.heading, fontSize:fontSizes.XSmall,
    },
    container:{
        flex:1,backgroundColor:myColors.background, 
        paddingVertical:responsiveScreenHeight(8.6)
    },
    input:{
        height:responsiveScreenHeight(5.9), borderWidth:1, borderRadius:responsiveScreenHeight(1.47),
        borderColor:myColors.border,paddingHorizontal:responsiveScreenWidth(3.3),
        fontSize:fontSizes.XSmall,color:myColors.text, fontFamily:fonts.bodyBold,
    },
    textForget:{
        fontFamily:fonts.headingBold, fontSize:fontSizes.large, color:myColors.text, 
        paddingVertical:responsiveScreenHeight(0.6)
    },
    textLight:{
        fontFamily:fonts.bodyBold, color:myColors.offColor,fontSize:fontSizes.medium
    },
    textLight2:{
        fontFamily:fonts.bodyBold, color:myColors.offColor,fontSize:fontSizes.XSmall,
        paddingStart:responsiveScreenWidth(3.3)
    },
    textSign:{
        fontFamily:fonts.heading, color:myColors.textL,fontSize:fontSizes.XSmall,
    }
})

const styles2=(verifyPass)=>StyleSheet.create({
    textReg:{
        color:verifyPass?myColors.background:myColors.offColor,fontFamily:fonts.headingBold,
        fontSize:fontSizes.XSmall
    },
    button:{
        height:responsiveScreenHeight(6.1), width:responsiveScreenWidth(68.3),
        borderRadius:responsiveScreenHeight(1.47),alignItems:'center', 
        justifyContent:'center', flexDirection:'row',
        backgroundColor:verifyPass?myColors.primary:myColors.offColor3
    }
})