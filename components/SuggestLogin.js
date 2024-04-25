import {View,StyleSheet,Text,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Color } from '../constant/Color'

function SuggestLogin(){
    const navigation=useNavigation()
    function buttonLoginHandle(){
        navigation.navigate('LoginPage')
    }
    return (
        <View style={styles.suggestContainer}>
                <Text style={styles.suggest}>Already Have An Account ?</Text>
                <Pressable style={({pressed})=>pressed ? styles.pressed:null} onPress={buttonLoginHandle}>
                    <Text style={styles.login}>Login</Text>
                </Pressable>
            </View>
    )
}
export default SuggestLogin;
const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    },
    suggestContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    suggest:{
        textTransform:'uppercase',
        fontSize:16,
        fontWeight:'bold',
        color:Color.gray
    },
    login:{
        marginStart:5,
        textTransform:'uppercase',
        fontSize:16,
        color:Color.primary200,
        fontWeight:'bold',

    }
})