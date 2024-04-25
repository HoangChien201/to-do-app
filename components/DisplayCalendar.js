import { Calendar } from 'react-native-calendars';
import { View, Modal, StyleSheet } from 'react-native'

import { FormatFullDay } from './util/FormatDisplayDay';
function DisplayCalendar({ modalVisibleCalendar, onUpdateValueCalendar }) {
  const monthNamesShort = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
  function UpdateValueCalendar(fullday) {
    const month = fullday.month < 10 ? '0' +  fullday.month : fullday.month
    const day = fullday.day < 10 ? '0' +  fullday.day : fullday.day
    const year = fullday.year

    onUpdateValueCalendar(FormatFullDay({
      month: month,
      day: day,
      year: year
    }))
  }
  return <View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisibleCalendar}
    >
      <View style={{ justifyContent: 'center', width: '100%', height: '100%' }}>
        <View style={styles.modalView}>
          <Calendar
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 350
            }}
            current={'2023-05-13'}
            onDayPress={UpdateValueCalendar}

          />
        </View>
      </View>

    </Modal>

  </View>
}
export default DisplayCalendar;
const styles = StyleSheet.create({
  modalView: {
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
})