import { Dimensions, StatusBar, View } from "react-native";
import { myColors } from "../utils/my_colors";

export const Spacer=({paddingV=0, paddingEnd=0, paddingT=0})=>(
    <View style={{paddingVertical:paddingV,paddingEnd:paddingEnd, paddingTop:paddingT }}/>
)

export const StatusWhite=()=>(
    <StatusBar barStyle='dark-content' backgroundColor={myColors.statusbarW} />
)
export const StatusPrimary=()=>(
    <StatusBar barStyle='light-content' backgroundColor={myColors.statusbarG} />
)
export const StatusTrans=()=>(
    <StatusBar barStyle='light-content' backgroundColor={myColors.backgroundTrans} />
)

export const height=Dimensions.get('window').height;
export const width=Dimensions.get('window').width;
 
export function percentH(per){
    return((height*per)/100)
}
export function percentW(per){
    return((width*per)/100)
}