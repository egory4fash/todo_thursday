import {AppActionsType, setAppStatusAC, setErrorAC} from "../app/app-reducer";
import {Dispatch} from "redux";

export const NetworkErrorHandler = (dispatch:Dispatch<AppActionsType>,message:string) => {
    dispatch(setErrorAC(message))
    dispatch(setAppStatusAC('idle'))
}