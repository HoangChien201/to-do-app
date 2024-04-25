import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useContext,useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons'
import { Color } from '../constant/Color';
import SearchSection from '../components/SearchSection';
import TaskItem from '../components/Tasks/TaskItem';
import { TaskContext } from '../stores/task-context';
import ModalAddCategory from '../components/categorys/ModalAddCategory';


function HomeMenuPage({ navigation }) {
    const TaskCtx = useContext(TaskContext)
    const listCategory = [...TaskCtx.categorys]
    const [modalAddCategoryVisible,setModalAddCategoryVisible]=useState(false);

    function onPressTaskItemHandle(id) {
        if(id==='add'){
            setModalAddCategoryVisible(true)
        }
        else{
            navigation.navigate('TaskMenuPage', {
                idCategory: id
            })
        }
    }

    function OnFisnishAddCategoryHandle(){
        setModalAddCategoryVisible(false)
    }

    return <View style={styles.container}>
        <SearchSection />
        <View style={styles.listTasksContainer}>
            <FlatList
                data={listCategory}
                keyExtractor={({ name }) => name}
                renderItem={({ item }) => <TaskItem item={item} color={Color.primary200} onPress={onPressTaskItemHandle} />}
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />

        
        </View>
        {
            modalAddCategoryVisible ? <ModalAddCategory modalAddCategoryVisible={modalAddCategoryVisible} onFisnishAddCategoryHandle={OnFisnishAddCategoryHandle}/> : null
        }


    </View>
}

export default HomeMenuPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: Color.primary100
    },
    listTasksContainer: {
        flex: 1,
        marginTop: 20
    }

})