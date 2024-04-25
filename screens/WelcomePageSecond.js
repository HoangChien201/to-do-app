import {View,Image,StyleSheet,Text, Pressable} from 'react-native'

import Heading from '../components/Heading'
import { Color } from '../constant/Color'
import ButtonCustom from '../components/ButtonCustom';
import SuggestLogin from '../components/SuggestLogin';

function WelcomePageSecond({navigation}){

    function buttonSignUpHandle(){
        navigation.navigate('SignUpPage')
    }
    
    return (
        <View style={styles.container}>
            <Heading color={Color.primary200}/>
            <Image source={require('../assests/images/saly.png')} style={styles.image}/> 
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What are what we do</Text>
                <Text style={styles.subTitle}>Thousand of people are using To Do App for make To Do list for better productivity</Text>
            </View>
            <View style={styles.containerButton}>
                <ButtonCustom children='Sign Up' backgroundColor={Color.primary200} color={Color.primary100} onPress={buttonSignUpHandle}/>
            </View>
            <SuggestLogin/>
        </View>
    )
}

export default WelcomePageSecond;
const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    },  
    container:{
        flex:1,
        alignItems:'center'
    },
    image:{
        width:350,
        height:300
    },
    titleContainer:{
        marginVertical:20,
        width:'70%',
        alignItems:'center'
    },
    title:{
        color:Color.primary200,
        fontSize:24,
        fontWeight:'bold',
        marginVertical:10
    },
    subTitle:{
        fontSize:16,
        textAlign:'center',
        color:Color.gray
    },
    containerButton:{
        marginTop:20,
        marginBottom:15,
        width:'90%',
        height:50,
    },
    
})