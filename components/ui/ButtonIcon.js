import { Pressable,StyleSheet } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons'
function ButtonIcon({icon,size,color,onPress}){
    return (
            <Pressable style={({pressed})=>pressed ? styles.pressed: null} onPress={onPress}>
                <Icon name={icon} size={size} color={color}/>
            </Pressable>
    )
}

export default ButtonIcon;

const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    },

})