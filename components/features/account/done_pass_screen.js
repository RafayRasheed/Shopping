import React from "react";
import { StyleSheet, Text,  TouchableOpacity, View,Image } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { myColors } from "../../utils/my_colors";
import { fontSizes, fonts } from "../../utils/my_fonts";
import { Spacer } from "../../common,componenrs/common";

export const DonePass= ({navigation})=>{
    return(
        <View style={styles.container}>
                
                <View style={styles.containerMid}>
                    {/* V Done */}
                    <View style={styles.containerDone}>
                        <Image style={{width:'32%', height:'20.7%', }} 
                            source={require('../../assets/account/check.png')}/>
                    </View>

                    <Spacer paddingT={responsiveScreenHeight(3.5)}/>
                    {/* T Success */}
                    <Text style={styles.textSucc}>Success</Text>

                    <Spacer paddingT={responsiveScreenHeight(1)}/>
                    {/* T Check */}
                    <Text style={styles.textCong}>Congratulations your password has been changed</Text>


                </View>
                <View style={{alignItems:'center'}}>
                    {/* Button Submit */}
                    <TouchableOpacity onPress={()=>navigation.navigate('Welcome')} activeOpacity={0.8} 
                        style={styles.button}>
                        <Text style={styles.textReg}>Sign in</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,backgroundColor:myColors.background, 
        paddingVertical:responsiveScreenHeight(8.6),
        flexGrow:1,justifyContent:'space-between',
    },
    containerMid:{
       flex:1, paddingHorizontal:responsiveScreenWidth(12.26), alignItems:'center',justifyContent:'center'
    },
    containerDone:{
        width:responsiveScreenHeight(10), height:responsiveScreenHeight(10), 
        borderRadius:responsiveScreenHeight(5), backgroundColor:myColors.primary, justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height:responsiveScreenHeight(6.1), width:responsiveScreenWidth(68.3),
        borderRadius:responsiveScreenHeight(1.47),alignItems:'center', 
        justifyContent:'center', flexDirection:'row',
        backgroundColor:myColors.primary
    },
    textReg:{
        color:myColors.background,fontFamily:fonts.headingBold,
        fontSize:fontSizes.XSmall
    },
    textSucc:{
        fontSize:fontSizes.xLarge, fontFamily:fonts.headingBold, color:myColors.text
    },
    textCong:{
        fontSize:fontSizes.XSmall, fontFamily:fonts.bodyBold, color:myColors.textL3, 
        textAlign:'center'
    },

})
