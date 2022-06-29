import axios from "axios";

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type CommonAPIType<T = {}> = {
    resultCode: number
    messages: Array<string>,
    fieldsErrors: string,
    data: T
}
type TaskType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type TaskGetType = {
    items: Array<TaskType>,
    totalCount: number,
    error: string
}
type TaskCreateType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string
    id: string,
    todoListId: string,
    order: number
    addedDate: string
}
type TaskPostAndPutType = {
    data: { item: TaskCreateType },
    resultCode: number
    messages: Array<string>
}
type TaskDeleteType = {
    resultCode: number,
    messages: Array<string>
    data: object
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        "API-KEY": "4c1f8e2e-911c-4c20-9e00-c61208faf7aa"
    }

})


export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>(`/todo-lists`)
    },

    createTodolist(data: object) {
        return instance.post<CommonAPIType<{ item: TodolistType }>>(`/todo-lists`, data)
    },

    deleteTodolist(ID: string) {
        return instance.delete<CommonAPIType>(`/todo-lists/${ID}`)
    },

    updateTodolist(ID: string, body: object) {
        return instance.put<CommonAPIType>(`/todo-lists/${ID}`, body)
    },

    getTasks(ID: string) {
        return instance.get<TaskGetType>(`/todo-lists/${ID}/tasks`)
    },

    createTask(ID: string, data: object) {
        return instance.post<TaskPostAndPutType>(`/todo-lists/${ID}/tasks`, data)
    },

    deleteTask(ID: string, taskID: string) {
        return instance.delete<TaskDeleteType>(`/todo-lists/${ID}/tasks/${taskID}`)
    },
    updateTask(ID: string, taskID: string, body: object) {

        return instance.put<TaskPostAndPutType>(`/todo-lists/${ID}/tasks/${taskID}`, body)
    }

}






