import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { myColors } from "../../../utils/my_colors";
import { fontSizes, fonts } from "../../../utils/my_fonts";
import { Spacer } from "../../../common,componenrs/common";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const axiosInstance = axios.create({ baseURL: 'http://192.168.1.108:3000' });

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
        console.log('storage done')
    } catch (e) {
        console.log("storage error: " + e);
    }
}

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value) {
            console.log("store value: " + value);
        }
    } catch (e) {
        console.log("storage error: " + e);
    }
}


export const Login = ({ navigate }) => {

    const [email, setEmail] = useState()
    const [password, setPass] = useState()
    const [verifyLog, setVerifyLog] = useState(false)

   
    const onLogin = () => {
        try {
            axiosInstance.post('/users/signin', {
                email,
                password
            }).then(resp => {
                console.log(resp.data.message);
            })
            .catch(function (error) {
                console.log(error.response.data.message);
            });
        }
        catch (error) {
            console.log('failed to connect url')
        }

    }
    function verifyEmail() {
        if (email) {
            return true
        }
        return false
    }
    function verifyPass() {
        if (password) {
            return true
        }
        return false
    }

    useEffect(() => {
        if (verifyEmail() && verifyPass()) {
            setVerifyLog(true)

        }
        else {
            setVerifyLog(false)
        }
    }, [email, password])

    useEffect(()=>{
        storeData("yes")
    },[])
    return (
        <View style={{ flex: 1, width: responsiveScreenWidth(87), justifyContent: 'center', }}>
            {/* email Portion */}
            <View>
                <Text style={[styles.heading, { color: email ? myColors.offColor : myColors.text }]}>Email address</Text>
                <TextInput placeholder="Eg namaemail@emailkamu.com"
                    placeholderTextColor={myColors.offColor}
                    style={styles.input} cursorColor={myColors.primary}
                    value={email} onChangeText={setEmail}
                    onEndEditing={() => verifyEmail()}
                />
            </View>

            <Spacer paddingT={responsiveScreenHeight(0.98)} />
            {/* password Portion */}
            <View>
                <Text style={[styles.heading, { color: password ? myColors.offColor : myColors.text }]}>Password</Text>
                <TextInput placeholder="**** **** ****"
                    placeholderTextColor={myColors.offColor}
                    style={styles.input} cursorColor={myColors.primary}
                    value={password} onChangeText={setPass}
                    onEndEditing={() => verifyPass()}
                    secureTextEntry={true}
                />
                {/* Forget Password */}
                <TouchableOpacity activeOpacity={0.8} style={{ alignSelf: 'flex-end' }}
                    onPress={() => navigate('ForgetPass')}>
                    <Text style={styles.textForgetP}>Forget Password?</Text>
                </TouchableOpacity>
            </View>

            <Spacer paddingT={responsiveScreenHeight(4.1)} />
            <View style={{ alignItems: 'center' }}>
                {/* Button Login */}
                {/* <TouchableOpacity onPress={() => verifyLog ? navigate('HomeNavigator') : null} */}
                <TouchableOpacity onPress={() => verifyLog ? onLogin() : null}
                    activeOpacity={0.8}
                    style={[styles.button, { backgroundColor: verifyLog ? myColors.primary : myColors.offColor3 }]}>
                    <Text style={styles2(verifyLog).textReg}>Login</Text>
                </TouchableOpacity>

                <Spacer paddingT={responsiveScreenHeight(1.5)} />
                <View style={{ width: responsiveScreenWidth(47), height: 0.8, backgroundColor: myColors.offColor4 }} />
                <Spacer paddingT={responsiveScreenHeight(1.5)} />

                <TouchableOpacity onPress={() => null} activeOpacity={0.8} style={[styles.button, { backgroundColor: myColors.offColor3 }]}>
                    <Image style={{ resizeMode: 'contain', width: responsiveScreenWidth(5.3), height: responsiveScreenWidth(5.3) }}
                        source={require('../../../assets/account/google.png')} />
                    <Spacer paddingEnd={responsiveScreenWidth(6.4)} />
                    <Text style={styles.textGoogle}>Login with Google</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        paddingStart: responsiveScreenWidth(2.7), paddingVertical: responsiveScreenHeight(0.8),
        fontFamily: fonts.heading, fontSize: fontSizes.XSmall,
    },
    input: {
        height: responsiveScreenHeight(5.9), borderWidth: 1, borderRadius: responsiveScreenHeight(1.47),
        borderColor: myColors.border, paddingHorizontal: responsiveScreenWidth(3.3),
        fontSize: fontSizes.XSmall, color: myColors.text, fontFamily: fonts.bodyBold,
    },
    button: {
        height: responsiveScreenHeight(6.1), width: responsiveScreenWidth(68.3),
        borderRadius: responsiveScreenHeight(1.47), alignItems: 'center', justifyContent: 'center',
        flexDirection: 'row',
    },
    textGoogle: {
        color: myColors.black2, fontFamily: fonts.heading,
        fontSize: fontSizes.XSmall
    },
    textForgetP: {
        fontFamily: fonts.heading, fontSize: fontSizes.XSmall, color: myColors.primary,
        paddingVertical: responsiveScreenHeight(0.8)
    }

})
const styles2 = (verifyLog) => StyleSheet.create({
    textReg: {
        color: verifyLog ? myColors.background : myColors.offColor, fontFamily: fonts.headingBold,
        fontSize: fontSizes.XSmall
    },
})