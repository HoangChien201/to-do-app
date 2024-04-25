import {Text,StyleSheet} from 'react-native'
import { Color } from '../constant/Color';
function Heading({color}){
    return <Text style={[styles.heading,{color:color}]}>To Do App</Text>
}

export default Heading;

const styles=StyleSheet.create({
    heading:{
        letterSpacing:2,
        color:Color.primary100,
        marginVertical:20,
        fontSize:24
    }
})