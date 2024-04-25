import {View,StyleSheet,Text, Pressable} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { Color } from '../../constant/Color';
function TaskMenuItemCreate(){
    return (
        <Pressable style={({pressed})=>pressed ? styles.pressed : null}>
            <View style={styles.containerTaskItem}>
                    <Icon name='add' size={60} color='red'/>
            </View>
        </Pressable>
    )
}
export default TaskMenuItemCreate;

const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    },
    containerTaskItem:{
        width:160,
        height:160,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'red'
    },
    iconWrapper:{
        width:50,
        height:50,
        borderRadius:30,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:Color.primary100
    }
})