import {Text,Pressable,StyleSheet} from 'react-native'
import { Color } from '../constant/Color';

function ButtonText({children,color,onPress}){
    return <Pressable style={({pressed})=>pressed ? styles.pressed : null} onPress={onPress}>
        <Text style={[styles.children,{color:color}]}>{children}</Text>
    </Pressable>
}

export default ButtonText;
const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    },
    children:{
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:16,
        color:Color.gray,
        fontWeight:'bold'
    }
})