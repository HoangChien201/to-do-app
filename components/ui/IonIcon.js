import {View,Text,StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
function IonIcon({style,icon,color,size}){
    return (
        <View style={style}>
            <Icon name={icon} size={size} color={color}/>
        </View>
    )
}
export default IonIcon;

const styles=StyleSheet.create({

})