export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'




const initialState = {
    status: 'loading' as RequestStatusType,
    error:null as null | string
}




type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            console.log(action.status)
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state,error:action.error}
        default:
            return state
    }
}


export type setAppStatusACType = ReturnType<typeof setAppStatusAC>
export type setErrorACType = ReturnType<typeof setErrorAC>
export type AppActionsType = setAppStatusACType
 | setErrorACType

export const setAppStatusAC = (status:RequestStatusType) => {
    return {
        type:'APP/SET-STATUS',status
    } as const
}
export const setErrorAC = (error:null | string) => {
    return {
        type:'APP/SET-ERROR',error
    } as const
}

