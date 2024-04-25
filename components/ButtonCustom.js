import { Pressable,Text,StyleSheet, View } from "react-native"

function ButtonCustom({children,onPress,backgroundColor,color}){
    return (
        <View >
            <Pressable style={({pressed})=>pressed ? styles.pressed: null} onPress={onPress}>
                <View style={[styles.container,{backgroundColor:backgroundColor}]}>
                    <Text style={[styles.children,{color:color}]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ButtonCustom;

const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        width:'100%',
        // backgroundColor:'#fff',
        borderRadius:30,
    },
    children:{
        textTransform:'uppercase',
        fontWeight:'bold',
        letterSpacing:4
    }
})