import { useEffect, useLayoutEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import AddTaskPage from './ManageTaskPage';

import { TaskContext } from '../stores/task-context';
import ButtonIcon from '../components/ui/ButtonIcon';
import { Color } from '../constant/Color';
import ListTask from '../components/Tasks/ListTask';
import ListTaskDoneComponent from '../components/Tasks/ListTaskDoneComponent';
import Floating from '../components/ui/Floating';

const listIDTaskDone = [1, 2, 3, 4, 5]
function TaskMenuPage({ navigation,route }) {
    const idCategory=route.params.idCategory

    const TaskCtx=useContext(TaskContext)
    const listCategory=[...TaskCtx.categorys]

    const categoryOfID=listCategory.find((category)=>{
        return category.idCategory===idCategory
    })
    const listTask=categoryOfID.listTask
    const [visibleMenuSelect, setVisibleMenuSelect] = useState(false);
    // const [listTaskDone, setListTaskDone] = useState()
    const [listChecked, setListChecked] = useState([]);

    const hideMenu = () => setVisibleMenuSelect(false);

    const showMenu = () => setVisibleMenuSelect(true);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: (tintColor) => {
                return (
                    
                    <Menu
                        visible={visibleMenuSelect}
                        anchor={<ButtonIcon icon='ellipsis-vertical' size={20} color={tintColor} onPress={showMenu}/>}
                        onRequestClose={hideMenu}
                        style={{minWidth:100}}
                    >
                        <MenuItem onPress={hideMenu}>Change list name</MenuItem>
                        <MenuItem disabled={listChecked.length > 0 ? false : true} onPress={DeleteTask}>Delete list</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={hideMenu}>Delete complete task</MenuItem>
                    </Menu>
                )
            },
            title: categoryOfID.name,

        })
    })

    // useEffect(() => {
    //     const listTaskDoneNew = listTask.filter((task) => {
    //         const idDone = listIDTaskDone.find((id) => id === task.id)
    //         if (idDone)
    //             return task
    //     })
    //     setListTaskDone([...listTaskDoneNew])
    // }, [listTask, listIDTaskDone])

    function radioButtonHandle(valueButton){
        if(listChecked.find((value)=>value===valueButton)){
            const listCheckedNew=listChecked.filter((value)=>value!==valueButton)
            setListChecked([...listCheckedNew])
        }
        else{
            setListChecked([...listChecked,valueButton])
        }
    }
    
    function AddTask(){
        navigation.navigate('ManageTaskPage',{
            idCategory:idCategory
        })
        
    }

    function DeleteTask(){
        TaskCtx.DeleteTask(listChecked,idCategory)
    }
    return (
        <View style={styles.taskMenuContainer}>
            <View style={styles.menuTask}>
                {
                    listTask.length<1 ? <Text style={{textAlign:'center'}}>Chưa có danh sách nhiệm vụ</Text>
                    : <ListTask listTask={listTask} listChecked={listChecked} radioButtonHandle={radioButtonHandle}/>
                }
                
            </View>
            <View style={styles.taskDone}>
                <Text style={styles.titleDone}>Done</Text>
                {/* <ListTaskDoneComponent listTaskDone={listTaskDone} /> */}
            </View>
            <Floating onPress={AddTask} />
        </View>
    )
}

export default TaskMenuPage;
const styles = StyleSheet.create({
    taskMenuContainer: {
        flex: 1,
        padding: 10
    },
    menuTask: {
        flex: 2,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: Color.gray
    },
    taskDone: {
        flex: 1,
        padding: 10,
        
    },
    titleDone: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Color.primary400
    }
})

