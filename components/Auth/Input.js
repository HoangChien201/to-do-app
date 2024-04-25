import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Color } from '../../constant/Color';

function Input({
    secure,
    onUpdateValue,
    value,
    isInvalid,
    placeholder,
    onPressIn,
    mode,
    maxLength
}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                placeholder={placeholder}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
                onPressIn={onPressIn}
                inputMode={mode}
                maxLength={maxLength}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    input:{
        width:'100%',
        borderRadius:15,
        backgroundColor:Color.primary300,
        height:60,
        padding:10,
        paddingHorizontal:20,
        fontSize:18,
        fontWeight:'bold',
    },
    inputInvalid: {
        backgroundColor: Color.error100,
    },
});