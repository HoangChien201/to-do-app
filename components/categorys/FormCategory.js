import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import Input from '../Auth/Input';
import { Color } from '../../constant/Color';
import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import ButtonCustom from '../ButtonCustom';
function FormCategory({onSubmit,onFisnishAddCategoryHandle}) {
            {/* select Color **** Cần tối ưu  */}
            {/* select Icon **** Cần tối ưu  */}

    const [selectedColor,setSelectedColor]=useState({
        selected:'red'
    })
    const [selectedIcon,setSelectedIcon]=useState({
        selected:'heart'
    })
    const [nameCategory,setNameCategory]=useState('')


    function OnSelectColorHandle(value) {
        setSelectedColor({selected:value})
    }

    function OnSelectIconHandle(value){
        setSelectedIcon({selected:value})
    }

    function OnUpdateValueName(value){
        setNameCategory(value)
    }

    return (
        <View>
            <Text style={styles.title}>ADD CATEGORY</Text>
            <Input 
                placeholder='Tên category' 
                value={nameCategory}
                onUpdateValue={OnUpdateValueName} />

            {/* select Color **** Cần tối ưu  */}

            <View style={[styles.selectColor, styles.selectContainer]}>
                <Text style={styles.lableSelect}>Color</Text>
                <View style={styles.selects}>
                    <Pressable onPress={OnSelectColorHandle.bind(this, 'red')}>
                        <View style={[styles.boxSelect, { backgroundColor: 'red' }, selectedColor.selected==='red' && styles.boxSelected]}></View>
                    </Pressable>
                    <Pressable onPress={OnSelectColorHandle.bind(this, 'green')}>
                        <View style={[styles.boxSelect, { backgroundColor: 'green' },selectedColor.selected==='green' && styles.boxSelected ]}></View>
                    </Pressable>
                    <Pressable onPress={OnSelectColorHandle.bind(this, 'purple')}>
                        <View style={[styles.boxSelect, { backgroundColor: 'purple' },selectedColor.selected==='purple' && styles.boxSelected ]}></View>
                    </Pressable>
                </View>
            </View>
            {/* select Color **** Cần tối ưu  */}


            {/* select Icon **** Cần tối ưu  */}
            <View style={[styles.selectIcon, styles.selectContainer]}>
                <Text style={styles.lableSelect}>Icon</Text>
                <View style={styles.selects}>
                    <Pressable onPress={OnSelectIconHandle.bind(this, 'heart')}>
                        <View style={[styles.boxSelect,selectedIcon.selected ==='heart' && styles.boxSelected]}>
                            <Icon name='heart' size={20} color='#ccc'/>
                        </View>
                    </Pressable>
                    <Pressable onPress={OnSelectIconHandle.bind(this, 'home')}>
                        <View style={[styles.boxSelect,selectedIcon.selected ==='home' && styles.boxSelected]}>
                            <Icon name='home' size={20} color='#ccc'/>
                        </View>
                    </Pressable>
                    <Pressable onPress={OnSelectIconHandle.bind(this, 'building-o')}>
                        <View style={[styles.boxSelect,selectedIcon.selected ==='building-o' && styles.boxSelected]}>
                            <Icon name='building-o' size={20} color='#ccc'/>
                        </View>
                    </Pressable>
                </View>
            </View>
            {/* select Icon **** Cần tối ưu  */}

            <View style={styles.buttonContainer}>
                <View style={styles.buttonCancle}>
                    <ButtonCustom children='Cancle' onPress={onFisnishAddCategoryHandle} />
                </View>
                <View style={styles.buttonAdd}>
                    <ButtonCustom children='Add' 
                    onPress={onSubmit.bind(this,{
                        id:Math.random(),
                        name:nameCategory,
                        icon:selectedIcon.selected,
                        color:selectedColor.selected,
                        listTask:[]
                    })}
                    />

                </View>

            </View>

        </View>
    )
}

export default FormCategory;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: Color.primary200,
        marginBottom: 5
    },
    selectContainer: {
        width: '100%',
        justifyContent: 'center',
        height: 70,
        marginTop:15,

    },
    lableSelect: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    selects: {
        flexDirection: 'row'
    },
    boxSelect: {
        width: 40,
        height: 40,
        marginEnd: 10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    boxSelected:{
        borderWidth:4,
        borderColor: Color.primary200
    },
    buttonContainer:{
        height:50,
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:"center",
        marginTop:20,
        paddingHorizontal:10
    },
    buttonAdd:{
        height:30,
        paddingHorizontal:10,
        backgroundColor:Color.primary200,
        borderRadius:15,
        marginStart:20
    }
    

})