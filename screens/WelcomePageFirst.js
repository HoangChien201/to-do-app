import {View,ImageBackground,StyleSheet, Text} from 'react-native'

import { Color } from '../constant/Color';
import Heading from '../components/Heading';
import ButtonCustom from '../components/ButtonCustom';
function WelcomePageFirst({navigation}){
    function buttonGetStartHandle(){
        navigation.navigate('WelcomPageSecond')
    }
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../assests/images/background-welcome.png')}
                resizeMode='contain'
                imageStyle={styles.image}
                style={styles.imageBackground}>

                    <View style={styles.contentContainer}>
                        <Heading color={Color.primary100}/>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Hi! Welcome to</Text>
                            <Text style={styles.headline}>To Do</Text>
                        </View>
                        
                        <Text style={styles.subTitle}>Explore the app, Let's make to do list with To Do</Text>
                    </View>

                    <View style={styles.containerButton}>
                        <ButtonCustom children='Get Started' backgroundColor={Color.primary100} onPress={buttonGetStartHandle}/>
                    </View>

            </ImageBackground>
                </View>

    )
}
export default WelcomePageFirst;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Color.primary200,
    },
    imageBackground: {
      flex: 1,
      alignItems:'center',
      justifyContent:'space-between',

    },
    image:{
        transform:[{scale:1.5}]
    },
    contentContainer:{
        alignItems:'center'
    },
    headline:{
        color:Color.primary100,
        fontSize:24
    },
    titleContainer:{
        marginBottom:5,
        alignItems:'center'
    },
    title:{
        color:Color.primary100,
        fontSize:30,
        fontWeight:'bold'
    },
    subTitle:{
        color:Color.primary100,
        fontSize:16,
        width:250,
        textAlign:'center'

    },
    containerButton:{
        marginBottom:50,
        width:'90%',
        height:50
    }
})