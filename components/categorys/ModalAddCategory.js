import {View, Text, Modal,StyleSheet} from 'react-native'
import {useState,useContext} from 'react'

import FormCategory from './FormCategory';
import { TaskContext } from '../../stores/task-context';

function ModalAddCategory({modalAddCategoryVisible,onFisnishAddCategoryHandle}) {
    const TaskCtx=useContext(TaskContext);

    function OnSubmit(category){
        console.log(category);
        TaskCtx.AddCategory(category)
        onFisnishAddCategoryHandle()
    }
    return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAddCategoryVisible}
                style={styles.modal}
            >
                <View style={{justifyContent:'center',width:'100%',height:'100%',alignItems:"center"}}>
                    <View style={styles.modalView}>
                        <FormCategory onSubmit={OnSubmit} onFisnishAddCategoryHandle={onFisnishAddCategoryHandle}/>
                    </View>
                </View>
               
                
            </Modal>

    )
}
export default ModalAddCategory;

const styles=StyleSheet.create({
    modalView: {
        backgroundColor:'#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height:400,
        width:'90%',
        paddingVertical:10,
        paddingHorizontal:20

    },
   
})