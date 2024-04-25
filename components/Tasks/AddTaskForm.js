import { View, Text, Modal, Alert, StyleSheet, Pressable } from 'react-native'
import { useState,useContext } from 'react'

import DisplayCalendar from '../../components/DisplayCalendar';
import Input from '../../components/Auth/Input';
import DisplaySetTime from '../../components/DisplaySetTime';
import ButtonCustom from '../../components/ButtonCustom';
import { Color } from '../../constant/Color';
import IonIcon from '../../components/ui/IonIcon';

function AddTaskForm({onSubmit,credentialsInvalid}) {
    
    const {
        name:taskNameIsInvalid,
        calendar:taskCalendarIsInvalid,
        time:taskTimeIsInvalid
    }=credentialsInvalid;


    const [modalVisibleCalendar, setModalVisibleCalendar] = useState(false);
    const [modalVisiblSetTime, setModalVisiblSetTime] = useState(false);
    const [valueTime, setValueTime] = useState('')
    const [valueCalendar, setValueCalendar] = useState('')
    const [valueNameTask,setValueNameTask]=useState('')
  
    function UpdateValueCalendar(day) {
      setValueCalendar(day)
      setModalVisibleCalendar(!modalVisibleCalendar)
    }
    function hideModalSetTime() {
      setModalVisiblSetTime(!modalVisiblSetTime)
    }
    function UpdateValueTime(time) {
      setValueTime(`${time.hour}:${time.minute}`)
      hideModalSetTime()
    }
    function SubmitHandle(){
        onSubmit({
            name:valueNameTask,
            calendar:valueCalendar,
            time:valueTime
        })
      
    }
    return (
      <View style={styles.addTaskPageContainer}>
        <View style={styles.formInput} >
          <IonIcon icon='ios-create-sharp' size={24} color={Color.primary200} style={styles.icon}/>
          <View style={{flex:1}}>
            <Input 
              placeholder='Name Task' 
              onUpdateValue={(value)=>setValueNameTask(value)} 
              value={valueNameTask}
              isInvalid={taskNameIsInvalid}
              />
          </View>
        </View>
        <View>
        {
          //view modal
        }
          <DisplayCalendar modalVisibleCalendar={modalVisibleCalendar} onUpdateValueCalendar={UpdateValueCalendar} />
          <DisplaySetTime modalVisiblSetTime={modalVisiblSetTime} onUpdateValueTime={UpdateValueTime} hideModalSetTime={hideModalSetTime} />
        </View>
  
        <View style={styles.formInput} >
          <IonIcon icon='calendar' size={24} color={Color.primary200} style={styles.icon}/>
          <View style={{flex:1}}>
            <Input 
              onPressIn={() => setModalVisibleCalendar(true)} 
              placeholder='Set caledar' 
              value={valueCalendar} 
              isInvalid={taskCalendarIsInvalid}
              />
          </View>
        </View>
  
        <View style={styles.formInput}>
          <IonIcon icon='md-alarm-sharp' size={24} color={Color.primary200} style={styles.icon}/>
          <View style={{flex:1}}>
            <Input 
              onPressIn={() => setModalVisiblSetTime(true)} 
              placeholder='Set time' 
              value={valueTime} 
              isInvalid={taskTimeIsInvalid}/>
          </View>
        </View>
  
        <View style={styles.buttonAdd}>
          <ButtonCustom children='Add' backgroundColor={Color.primary200} onPress={SubmitHandle}/>
        </View>
  
      </View>
    )
  }
  
  export default AddTaskForm;
  const styles = StyleSheet.create({
    addTaskPageContainer: {
      padding: 20
    },
    modalView: {
      margin: 20,
      marginTop: '50%',
      backgroundColor: 'white',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    buttonAdd: {
      height: 50,
      marginTop: 20
    },
    formInput:{
      flexDirection:'row',
      alignItems:'center',
    },
    icon:{
      marginRight:10
    }
  });
