import { View, Text, Modal, Alert, StyleSheet } from 'react-native'
import { useState } from 'react'

import Input from './Auth/Input';
import ButtonCustom from './ButtonCustom';
import { Color } from '../constant/Color';

function DisplaySetTime({ modalVisiblSetTime, onUpdateValueTime, hideModalSetTime }) {
    const [valueTime, setValueTime] = useState({
        hour: 0,
        minute: 0
    })

    function UpdateValueTime(type, time) {

        if (type === 'hour')
            if ((time < 0) || (time > 23)) {
                Alert.alert('Giờ không được quá 23 và nhỏ hơn 0')
            }
            else {
                setValueTime({ ...valueTime, hour: time })
            }

        if (type === 'minute')
            if ((time < 0) || (time > 60)) {
                Alert.alert('Phút không được quá 60 và nhỏ hơn 0')
            }
            else {
                setValueTime({ ...valueTime, minute: time })
            }

    }

    function buttonDoneHandle() {
        let hour = valueTime.hour
        let minute = valueTime.minute
        hour < 10 ? hour = `0${hour}` : hour = hour
        minute < 10 ? minute = `0${minute}` : minute = minute
        onUpdateValueTime({ hour: hour, minute: minute })
    }
    function buttonCancleHandle() {
        hideModalSetTime()
    }

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisiblSetTime}
        >
            <View style={{ justifyContent: 'center', width: '100%', height: '100%' }}>

                <View style={styles.modalView}>
                    <Text style={styles.title}>Set time</Text>

                    <View style={styles.inputTimeContainer}>
                        <View style={styles.input}>
                            <Input
                                mode='numeric'
                                maxLength={2}
                                value={valueTime.hour}
                                onUpdateValue={UpdateValueTime.bind(this, 'hour')}
                            />
                            <Text>Hour</Text>

                        </View>
                        <Text style={{ fontSize: 50 }}>:</Text>
                        <View style={styles.input}>
                            <Input
                                mode='numeric'
                                maxLength={2}
                                value={valueTime.minute}
                                onUpdateValue={UpdateValueTime.bind(this, 'minute')}
                            />
                            <Text>Minute</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{ marginHorizontal: 10 }}>
                            <ButtonCustom children='Cancle' onPress={buttonCancleHandle} />
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <ButtonCustom children='Done' color={Color.primary200} onPress={buttonDoneHandle} />
                        </View>
                    </View>


                </View>
            </View>
        </Modal>

    )
}
export default DisplaySetTime;
const styles = StyleSheet.create({
    modalView: {
        minHeight: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },
    input: {
        width: 60,
        height: 80,
        alignItems: 'center'
    },
    inputTimeContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'flex-end'
    }
})