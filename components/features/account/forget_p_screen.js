import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { myColors } from "../../utils/my_colors";
import { fontSizes, fonts } from "../../utils/my_fonts";
import { Spacer, StatusWhite } from "../../common,componenrs/common";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 

export const ForgetPassword=({navigation})=>{
    const [email, setEmail]=useState()
    const [verifyPass, setVerifyPass]=useState(false)
    
    function verifyEmail(){
        if(email){
            return true
        }
        return false
    }
    useEffect(()=>{
        if(verifyEmail()){
            setVerifyPass(true)
            
        }
        else{
            setVerifyPass(false)
        }
    },[email])

    return(
        <>
            <StatusWhite/>
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1,justifyContent:'space-between',}} style={styles.container}>
                
                <View style={{paddingHorizontal:responsiveScreenWidth(6.4)}}>
                    <Spacer paddingT={responsiveScreenHeight(5.78)}/>

                    {/* T ForgetPass */}
                    <Text style={styles.textForget}>Forget Password</Text>
                    <Text style={[styles.textLight,{fontSize:fontSizes.medium}]}>Enter your registered email below</Text>
                    
                    <Spacer paddingT={responsiveScreenHeight(6.9)}/>
                    {/* Email Portion */}
                    <View >
                        <Text style={[styles.heading,{color:email?myColors.offColor:myColors.text}]}>Email address</Text>
                        <TextInput placeholder="Eg namaemail@emailkamu.com" 
                            placeholderTextColor={myColors.offColor} 
                            style={styles.input} cursorColor={myColors.primary}
                            value={email} onChangeText={setEmail}
                            onEndEditing={()=>verifyEmail()}
                        />
                    </View>

                    <Spacer paddingT={responsiveScreenHeight(1.9)}/>
                    {/* T Remember Pass */}
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textLight2}>Remember the password?</Text>
                        <TouchableOpacity onPress={()=>navigation.goBack()} activeOpacity={0.6}>
                            <Text style={styles.textSign}> Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{alignItems:'center'}}>
                    {/* Button Submit */}
                    <TouchableOpacity onPress={()=>verifyPass?navigation.navigate('DoneEmail'):null} activeOpacity={0.8} 
                        style={styles2(verifyPass).button}>
                        <Text style={styles2(verifyPass).textReg}>Submit</Text>
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
        fontFamily:fonts.heading, color:myColors.primary,fontSize:fontSizes.XSmall,
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