import { View, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../components/Auth/Input';
import { Color } from '../constant/Color';
import { useState } from 'react';
function SearchSection() {
    const [isEnteredValue,setIsEnteredValue]=useState(false)

    function UpdateValueHandle(enterdValue){
        enterdValue ? setIsEnteredValue(true) : setIsEnteredValue(false);

    }
    return (
        <View style={styles.searchSection}>
            <View style={styles.input}>
                <Input onUpdateValue={UpdateValueHandle}/>
            </View>
            {
                !isEnteredValue ? <View style={styles.iconSearch}>
                    <Icon name='search' size={24} color={Color.gray} />
                    <Text style={styles.placeholderSearch}>Search tasks</Text>
                </View> : null
            }
            
        </View>
    )
}
export default SearchSection;
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSearch: {
        flexDirection:'row',
        alignItems:'center',
        position: 'absolute',
        left: 20
    },
    placeholderSearch:{
        marginStart:10,
        fontSize:16
    },
    input: {
        flex: 1,
    }
})