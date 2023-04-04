import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { myColors } from "../../../utils/my_colors";
import { fontSizes, fonts } from "../../../utils/my_fonts";
import { Spacer } from "../../../common,componenrs/common";
export const CreateAcc=()=>{
    const [name, setName]=useState(null)
    const [email, setEmail]=useState()
    const [pass, setPass]=useState()
    const [verifyReg, setVerifyReg]=useState(false)
    
    function verifyName(){
        if(name){
            return true
        }
        return false
    }
    function verifyEmail(){
        if(email){
            return true
        }
        return false
    }
    function verifyPass(){
        if(pass){
            return true
        }
        return false
    }

    useEffect(()=>{
        if(verifyName() && verifyEmail() && verifyPass()){
            setVerifyReg(true)
            
        }
        else{
            setVerifyReg(false)
        }
    },[name, email, pass])

    return( 
        <View style={{flex:1,width:responsiveScreenWidth(87),justifyContent:'center'}}>
            {/* Name Portion */}
            <View>
                <Text style={[styles.heading,{color:name?myColors.offColor:myColors.text}]}>Full Name</Text>
                <TextInput placeholder="Enter Your Full Name" 
                    placeholderTextColor={myColors.offColor} 
                    style={styles.input} cursorColor={myColors.primary}
                    value={name} onChangeText={setName}
                    onEndEditing={()=>verifyName()}
                />
            </View>
            <Spacer paddingT={responsiveScreenHeight(0.98)}/>
             {/* email Portion */}
             <View>
                <Text style={[styles.heading,{color:email?myColors.offColor:myColors.text}]}>Email address</Text>
                <TextInput placeholder="Eg namaemail@emailkamu.com" 
                    placeholderTextColor={myColors.offColor} 
                    style={styles.input} cursorColor={myColors.primary}
                    value={email} onChangeText={setEmail}
                    onEndEditing={()=>verifyEmail()}
                />
            </View>

            <Spacer paddingT={responsiveScreenHeight(0.98)}/>
             {/* password Portion */}
             <View>
                <Text style={[styles.heading,{color:pass?myColors.offColor:myColors.text}]}>Password</Text>
                <TextInput placeholder="**** **** ****" 
                    placeholderTextColor={myColors.offColor} 
                    style={styles.input} cursorColor={myColors.primary}
                    value={pass} onChangeText={setPass}
                    onEndEditing={()=>verifyPass()}
                    secureTextEntry={true}
                />
            </View>

            <Spacer paddingT={responsiveScreenHeight(4.1)}/>
            <View style={{alignItems:'center'}}>
                {/* Button Register */}
                <TouchableOpacity onPress={()=>null} activeOpacity={0.8} style={[styles.button,{backgroundColor:verifyReg?myColors.primary:myColors.offColor3}]}>
                    <Text style={styles2(verifyReg).textReg}>Registration</Text>
                </TouchableOpacity>
                
                <Spacer paddingT={responsiveScreenHeight(0.98)}/>
                <View style={{width:responsiveScreenWidth(47), height:0.8, backgroundColor:myColors.offColor4}}/>
                <Spacer paddingT={responsiveScreenHeight(0.98)}/>

                <TouchableOpacity onPress={()=>null} activeOpacity={0.8} style={[styles.button,{backgroundColor:myColors.offColor3}]}>
                    <Image style={{resizeMode:'contain', width:responsiveScreenWidth(5.3), height:responsiveScreenWidth(5.3)}} 
                        source={require('../../../assets/account/google.png')}/>
                    <Spacer paddingEnd={responsiveScreenWidth(6.4)}/>
                    <Text style={styles.textGoogle}>Sign up with Google</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles=StyleSheet.create({
    heading:{
        paddingStart:responsiveScreenWidth(2.7), paddingVertical:responsiveScreenHeight(0.8),
        fontFamily:fonts.heading, fontSize:fontSizes.XSmall,
    },
    input:{
        height:responsiveScreenHeight(5.9), borderWidth:1, borderRadius:responsiveScreenHeight(1.47),
        borderColor:myColors.border,paddingHorizontal:responsiveScreenWidth(3.3),
        fontSize:fontSizes.XSmall,color:myColors.text, fontFamily:fonts.bodyBold,
    },
    button:{
        height:responsiveScreenHeight(6.1), width:responsiveScreenWidth(68.3),
        borderRadius:responsiveScreenHeight(1.47),alignItems:'center', justifyContent:'center',
        flexDirection:'row',
    },
    textGoogle:{
        color:myColors.black2,fontFamily:fonts.heading,
        fontSize:fontSizes.XSmall
    },
    
})
const styles2=(verifyReg)=>StyleSheet.create({
    textReg:{
        color:verifyReg?myColors.background:myColors.offColor,fontFamily:fonts.headingBold,
        fontSize:fontSizes.XSmall
    },
})