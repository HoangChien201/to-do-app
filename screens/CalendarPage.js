import React, { useState, useContext, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native'

import { TaskContext } from '../stores/task-context';

function CalendarPage() {
  const [selected, setSelected] = useState('');
  const [makeDateTasks,setMakeDateTasks]=useState({})
  const taskCtx=useContext(TaskContext);
  const listCategory=taskCtx.categorys;
  const dates={}

  useEffect(()=>{
    listCategory.forEach(category=>{
      const listTask= category.listTask;
      listTask && category.listTask.forEach(task=>{
        dates[task.date]={ marked: true}
      })
    })
    setMakeDateTasks(prevMakeDate=>{
      return {
        ...prevMakeDate,...dates
      }
    })
  },[taskCtx])
  
  

  console.log(makeDateTasks);
  return <View>
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={makeDateTasks}
    />
  </View>
}

export default CalendarPage;