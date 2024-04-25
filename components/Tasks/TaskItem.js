import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native'
import { useState, useContext } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome'
import { Color } from '../../constant/Color';
import { TaskContext } from '../../stores/task-context';

function TaskItem({ item, onPress }) {
    const TaskCtx = useContext(TaskContext)
    const [actionItemVisible, setActionItemVisible] = useState(false);

    function ActionItemVisible() {
        if (!item.add) {
            setActionItemVisible(true);
        }

    }

    function DeleteCategoryHandle() {
        TaskCtx.DeleteCategory(item.idCategory)
    }
    function ChangeCategoryHandle() {

    }
    function CancleActionHandle() {
        setActionItemVisible(false)
    }

    function LayoutActionCategory() {
        return (
            <View style={[styles.containerTaskItem, { backgroundColor: item.color, borderColor: item.color, opacity: 0.8 }]}>
                <Pressable onPress={DeleteCategoryHandle} style={({ pressed }) => pressed ? styles.pressed : null}>
                    <Icon name='trash-o' size={30} color='#fff' style={styles.icon} />
                </Pressable>
                <Pressable onPress={ChangeCategoryHandle} style={({ pressed }) => pressed ? styles.pressed : null}>
                    <Icon name='pencil' size={28} color='#fff' style={styles.icon} />
                </Pressable>
                <Pressable onPress={CancleActionHandle} style={({ pressed }) => pressed ? styles.pressed : null}>
                    <Icon name='angle-down' size={40} color='#fff' style={[styles.icon]} />
                </Pressable>
            </View>
        )
    }

    return (
        actionItemVisible ? <LayoutActionCategory /> :
            <TouchableOpacity
                onLongPress={ActionItemVisible}
                delayLongPress={1000}
                onPress={onPress.bind(this, item.idCategory)}>
                {
                    !item.add ? <View style={[styles.containerTaskItem, { backgroundColor: item.color, borderColor: item.color }]}>
                        <View style={styles.iconWrapper}>
                            <Icon name={item.icon} size={28} color={item.color} />
                        </View>
                        <Text style={styles.nameTask}>{item.name}</Text>
                    </View>
                        : <View style={[styles.containerTaskItem, { borderColor: item.color }]}>
                            <View style={styles.iconWrapper}>
                                <Icon name={item.icon} size={50} color={item.color} />
                            </View>
                        </View>
                }
            </TouchableOpacity>
    )
}
export default TaskItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    },
    containerTaskItem: {
        width: 160,
        height: 160,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        borderWidth: 2,
    },
    iconWrapper: {
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: Color.primary100
    },
    nameTask: {
        marginTop: 5,
        color: Color.primary100,
        fontSize: 18,
        fontWeight: 'bold'
    },
    layoutActionCategory: {
        flex: 1,
        backgroundColor: 'red'
    },
    icon: {
        marginBottom: 10,
        textAlign: 'center'
    }
})