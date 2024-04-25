import {View,Text,StyleSheet} from 'react-native'

import IonIcon from '../ui/IonIcon';
import { Color } from '../../constant/Color';
function TaskItemDone({nameTask}){
    return (
        <View style={styles.taskItemDoneContainer}>
            <IonIcon style={styles.icon} icon='md-checkmark' size={30} color={Color.primary200}/>
            <Text style={styles.nameTask}>{nameTask}</Text>
        </View>
    )
}
export default TaskItemDone;

const styles=StyleSheet.create({
    taskItemDoneContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5
    },
    icon:{
        marginEnd:10
    },
    nameTask:{
        color:Color.gray,
        fontSize:17,
        textDecorationLine:'line-through'
    }
})