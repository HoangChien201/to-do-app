import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native'

import TaskMenuItem from './TaskMenuItem';

function ListTask({listTask,listChecked,radioButtonHandle}) {
    
    return (
        <View>
            <FlatList
                data={listTask}
                keyExtractor={({ idTask }) => idTask}
                renderItem={({ item }) => <TaskMenuItem radioButtonHandle={radioButtonHandle} listChecked={listChecked} task={item} />}
            />
        </View>
    )
}
export default ListTask;
const styles = StyleSheet.create({

})