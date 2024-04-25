import {View,Text,StyleSheet} from 'react-native'
import { RadioButton } from 'react-native-paper';
import { Color } from '../../constant/Color';
function TaskMenuItem({radioButtonHandle,listChecked,task}){
    return (
        <View style={styles.taskMenuItem}>
            <View style={styles.radioButton}>
                <RadioButton
                    value={task.idTask}
                    status={ listChecked.find((value)=>value === task.idTask)  ? 'checked' : 'unchecked' }
                    onPress={radioButtonHandle.bind(this,task.idTask)}
                />
            </View>
            <View style={styles.contentTaskContainer}>
                <Text style={styles.nameTask}>{task.name}</Text>
                <Text style={styles.timeTask}>{task.time}</Text>
            </View>
        </View>
    )
}
export default TaskMenuItem;
const styles=StyleSheet.create({
    taskMenuItem:{
        flexDirection:'row',
        marginVertical:10
    },
    radioButton:{
        marginEnd:20
    },
    contentTaskContainer:{

    },
    nameTask:{
        marginBottom:10,
        fontSize:18,
        fontWeight:'bold'
    },
    timeTask:{
        backgroundColor:Color.primary200,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:20,
        color:Color.primary100,
        fontSize:15

    }
})