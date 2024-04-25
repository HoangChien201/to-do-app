import { View, Text, Modal, Alert, StyleSheet, Pressable } from 'react-native'
import { useState,useContext } from 'react'

import AddTaskForm from '../components/Tasks/AddTaskForm'
import { TaskContext } from '../stores/task-context';
import { FormatDayTask } from '../components/util/FormatDisplayDay';

function ManageTaskPage({navigation,route}) {
  const TaskCtx=useContext(TaskContext)
  const idCategory=route.params.idCategory


  const [credentialsInvalid,setCredentialsInvalid]=useState({
    name:false,
    calendar:false,
    time:false,
})

  function submitHandle(credentials){
    let {name,calendar,time}=credentials

    name=name.trim();
    time=time.trim();
    calendar=calendar.trim();
    const taskNameIsInvalid=name.length>0;
    const taskTimeIsInvalid=time.length>0;
    const taskCalendarIsInvalid=calendar.length>0
    if(!taskNameIsInvalid || !taskTimeIsInvalid || !taskCalendarIsInvalid){
      Alert.alert('Xem lại thông tin')
      setCredentialsInvalid({
        name:!taskNameIsInvalid,
        calendar:!taskCalendarIsInvalid,
        time:!taskTimeIsInvalid
      })
      return
    }


    TaskCtx.AddTask(
      {
        name:name,
        time:FormatDayTask(calendar,time),
        date:calendar
      },idCategory
    )
    navigation.goBack()
  }

  return(
    <AddTaskForm onSubmit={submitHandle} credentialsInvalid={credentialsInvalid}/>
  )
  
}

export default ManageTaskPage;
const styles = StyleSheet.create({
  
});