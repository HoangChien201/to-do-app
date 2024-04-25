import {View,Text,StyleSheet} from 'react-native'

import TaskItemDone from './TaskItemDone';
import { FlatList } from 'react-native-gesture-handler';
function ListTaskDoneComponent({listTaskDone}){
    return (
        <View style={styles.listTaskDoneContainer}>
            {
                listTaskDone ? 
                <FlatList
                data={listTaskDone}
                keyExtractor={({id})=>id}
                renderItem={({item})=><TaskItemDone nameTask={item.name}/>}
                />
                :null

            }   

        </View>
    )
}
export default ListTaskDoneComponent;

const styles=StyleSheet.create({
    listTaskDoneContainer:{
        marginTop:10
    }
})