import React, {useEffect, useState} from 'react'

import {todolistAPI} from "../API/todolistAPI";

export default {
    title: 'API'
}




// export const GetTodolists = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         todolistAPI.getTodolists()
//             .then((res) => {
//                 setState(res.data);
//             })
//     }, [])
//
//
//     return <div> {JSON.stringify(state)}</div>
// }
// export const CreateTodolist = () => {
//     const [state, setState] = useState<any>(null)
//
//     useEffect(() => {
//         const data = {title: 'something'}
//         todolistAPI.createTodolist(data)
//             .then( (res) => {
//                 setState(res.data)
//             })
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }
// export const DeleteTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     const ID = 'd21a6e81-6dc7-4d9b-83fc-1bf9b865c1f9'
//     useEffect(() => {
//         todolistAPI.deleteTodolist(ID)
//             .then( (res) => {
//                 setState(res.data)
//             })
//     }, [])
//
//
//     return <div> {JSON.stringify(state)}</div>
// }
// export const UpdateTodolistTitle = () => {
//     const [state, setState] = useState<any>(null)
//     const ID = 'a48169f9-39a9-4b6f-94c4-569004eafb8d'
//     const body = {title:'Egory4!sdfsdfsd'}
//     useEffect(() => {
//         todolistAPI.updateTodolist(ID,body)
//             .then( (res) => {
//                 setState(res.data)
//             })
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const ID = 'dc2666fd-1526-460c-8f1c-e164fc553ebf'
    useEffect(() => {
todolistAPI.getTasks(ID)
            .then((res) => {
                setState(res.data);
            })
    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const ID = 'dc2666fd-1526-460c-8f1c-e164fc553ebf'
        const data = {title: 'taskTitle3'}
        todolistAPI.createTask(ID,data)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const ID = 'dc2666fd-1526-460c-8f1c-e164fc553ebf'
    const taskID = "e1166d89-7176-4094-945c-6a0d3c77ac17"
    useEffect(() => {
        todolistAPI.deleteTask(ID,taskID)
            .then( (res) => {
                setState(res.data)
            })
    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const ID = 'dc2666fd-1526-460c-8f1c-e164fc553ebf'
    const taskID = "7e49b181-1c14-4253-85a1-5bc8a3579093"
    const body = {title: 'testTask',
        description: "dunno",
        completed: true,
        status: 8,
        priority: 1,
        startDate: '2019-07-30T12:24:15.063',
        deadline: '2019-07-30T12:24:15.064'}
    useEffect(() => {
        todolistAPI.updateTask(ID,taskID,body)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}