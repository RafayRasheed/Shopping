import React, { useState, useRef } from "react";
import { Text, View, StatusBar, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { height, percentH, percentW, Spacer, StatusWhite, width } from "../../common,componenrs/common";
import {myColors} from '../../utils/my_colors';
import { fonts, fontSizes } from "../../utils/my_fonts";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight
  } from "react-native-responsive-dimensions";

const WithdHor= width/1.5;

const onboardItems =[
    {
        key:'first',
        image:require('../../assets/onboard/maps.png'),
        title:'Nearby restaurants',
        text:'You dont have to go far kjil you to find a good restaurant, we have provided all the restaurants that is near you',
    },
    {
        key:'second',
        image:require('../../assets/onboard/order.png'),
        title:'Select the Favorites Menu',
        text:'Now eat well, dont leave the house,You can choose your favorite food only with one click',
    },
    {
        key:'third',
        image:require('../../assets/onboard/food.png'),
        title:'Good food at a cheap price',
        text:'You can eat at expensive restaurants with affordable price',
    },
]

// Screen
const Content=({item, mykey})=>{

    return(
        <View key={mykey} style={{width,alignItems:'center'}}>
            <View style={{width:responsiveWidth(77), height:responsiveHeight(37), alignItems:'center', justifyContent:'center'}}>
                <Image style={{maxWidth:responsiveWidth(77),maxHeight:responsiveHeight(37), paddingHorizontal:40}} resizeMode='contain' source={item.image}/>
            </View>
                <Spacer paddingT={responsiveHeight(2)}/>
                <View style={{alignItems:'center'}}>
                    <Text style={{paddingHorizontal:responsiveWidth(8),fontSize:fontSizes.xLarge,
                        textAlign:'center', fontFamily:fonts.heading, 
                        color:myColors.text}}>{item.title}</Text>
                    <Spacer paddingT={responsiveHeight(2)}/>
                    <Text style={{width:responsiveWidth(76),fontSize:fontSizes.small,
                        fontFamily:fonts.body,textAlign:'center',
                        color:myColors.text}}>{item.text}</Text>
                </View>
            <Spacer paddingT={responsiveHeight(13)}/>
        </View>
    )
}

export const OnboardScreen=({navigation})=>{
    const [i, setI]=useState(0)
    const dotArr=[]
    const len=onboardItems.length
    const [ref, setRef] = useState(null);
    const [posX, setPosX] = useState([]);
    const [first, setFirst ] = useState(true)

    for(let j=0;j<len;j++){
        dotArr.push(<View key={j} style={{backgroundColor:j==i?myColors.primary:myColors.dot, 
        height:responsiveScreenHeight(1.25), width:responsiveScreenHeight(1.25), margin:5,borderRadius:10 }}/>)
    }

    function Start(){
        const pos= posX[i]
        ref.scrollTo({
            x: pos,
            y: 0,
            animated: false,
        });
    }

    function onForward(){
        const pos= posX[i+1]
        setI(i+1)
        ref.scrollTo({
            x: pos,
            y: 0,
            animated: true,
        }); 
    }

    return( 
        <SafeAreaView style={styles.container}>
            <StatusWhite/>        
            {/* <Content item={onboardItems[i]} mykey={i}/> */}
           
            <ScrollView ref={ref=>setRef(ref)} scrollEnabled={false} 
                contentContainerStyle={{alignItems:'flex-end'}} horizontal 
                showsHorizontalScrollIndicator={false}>
                {
                    onboardItems.map((item, ind)=>
                        <View 
                            key={ind}
                            onLayout={(event) => {
                                const layout = event.nativeEvent.layout;
                                posX[ind] = layout.x;
                                setPosX(posX);
                                if(0==ind && first){
                                    setFirst(false)
                                    Start()
                                }}
                            }>
                            

                            <Content  item={item} mykey={item.key}/>
                        </View>
                    )
                }
            </ScrollView>
           

            {/* Bottom , */}
            <View style={styles.bottom}>
                {/* Skip  */}
                <TouchableOpacity onPress={()=>i<len-1?navigation.replace('AccountStack'):null} style={{justifyContent:'center',minWidth:responsiveWidth(9)}}>
                    {i<len-1 && <Text style={{fontSize:fontSizes.medium, fontFamily:fonts.body, 
                    color:myColors.text}}>Skip</Text>}
                </TouchableOpacity>
                {/* Dots */}
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    {dotArr}
                </View>
                {/* Arrow */}
                <TouchableOpacity
                    onPress={()=>i<len-1?onForward():navigation.replace('AccountStack')}>
                    <Image style={{width:responsiveWidth(3.7), height:responsiveWidth(3.7), resizeMode:'contain'}} source={require('../../assets/onboard/arrow.png')}/>
                </TouchableOpacity>
            </View>

            <Spacer paddingT={responsiveHeight(5.4)}/>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:myColors.background,
        justifyContent:'flex-end',
    },
    bottom:{
        flexDirection:'row', justifyContent:'space-between',alignItems:'center', 
        paddingHorizontal:23
    }

})