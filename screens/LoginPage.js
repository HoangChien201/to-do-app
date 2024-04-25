import {View,Text,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import ButtonText from '../components/ButtonText';
import AuthContent from '../components/Auth/AuthContent';


function LoginPage(){
    const navigation=useNavigation()
    function buttonSignupHandle(){
        navigation.navigate('SignUpPage')
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Hello Again! Welcome back</Text>
                <AuthContent isLogin={true}/>

                
            </View>
            <ButtonText children='Sign Up' onPress={buttonSignupHandle}/>

        </View>
    )
}
export default LoginPage;

const styles=StyleSheet.create({
    container:{
        marginTop:30,
        padding:30,

    },
    heading:{
        fontSize:35,
        fontWeight:'bold',
        color:'#000',
        width:200
    },
    containerButtonLogin:{
        marginBottom:100,
        width:'100%',
        height:60,
    },
})