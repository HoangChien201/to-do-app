import {createContext,useReducer} from 'react'
import { Color } from '../constant/Color'

export const TaskContext=createContext({
    categorys:[],
    AddTask:(task,idCategory)=>{},
    DeleteTask:(listCheckedDelete,idCategory)=>{},
    AddCategory:(category)=>{},
    DeleteCategory:(idCategory)=>{}
})

function TaskReducer(state,action){
    switch (action.type){
        case 'ADDTASK':
            const listCategoryNew=state.map((category)=>{
                    if(category.idCategory===action.payload.idCategory){
                        const task={
                            idCategory:category.idCategory,
                            idTask:Math.random(),
                            ...action.payload.task
                        }
                        category.listTask.push(task)
                        return {...category}
                        
                    }
                    else
                        return category;
                })
            return listCategoryNew;
        case 'DELETETASK':
            const listCategoryDeletedTask=state.map((category)=>{
                if(category.idCategory===action.payload.idCategory){
                    const listTaskDeleted=category.listTask.filter((task) => {
                        const idTaskDelete = action.payload.listCheckedDelete.find((id) => id === task.idTask)
                        if (!idTaskDelete)
                            return task
                        })
                    return {...category,listTask:listTaskDeleted}
                    
                }
                else
                    return category;
            })
            return listCategoryDeletedTask;
        case 'ADDCATEGORY':
            return [action.payload,...state]
        case 'DELETECATEGORY':
            console.log('detelte');
            console.log(action.payload);
            return state.filter((category)=>category.idCategory != action.payload)
             

            
    }
}

function TaskContextProvider({children}){
    const [categorysState,dispatch]=useReducer(TaskReducer,[
    {
        idCategory:1,
        name:'Task 1',
        icon:'heart',
        color:'red',
        listTask:[]
    },
    {
        idCategory:2,
        name:'Task 2',
        icon:'heart',
        color:Color.primary200,
        listTask:[]
    },
    {
        add:true,
        idCategory:'add',
        name:'',
        icon:'plus-circle',
    }])

    function AddTask(task,idCategory){
        dispatch({type:'ADDTASK',payload:{task:task,idCategory:idCategory}})
    }

    function DeleteTask(listCheckedDelete,idCategory){
        dispatch({type:'DELETETASK',payload:{listCheckedDelete:listCheckedDelete,idCategory:idCategory}})
    }

    function AddCategory(category){
        dispatch({type:'ADDCATEGORY',payload:category})
    }
    function DeleteCategory(idCategory){
        dispatch({type:'DELETECATEGORY',payload:idCategory})
    }

    const value={
        categorys:categorysState,
        AddTask:AddTask,
        DeleteTask:DeleteTask,
        AddCategory:AddCategory,
        DeleteCategory:DeleteCategory
    }
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export default TaskContextProvider;