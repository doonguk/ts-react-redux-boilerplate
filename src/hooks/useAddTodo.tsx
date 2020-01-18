import {useDispatch} from "react-redux"
import { useCallback } from 'react'
import {addTodo} from "../modules/reducers/todos"

export default function useAddTodo(){
  const dispatch = useDispatch()
  return useCallback((text: string)=>dispatch(addTodo(text)),[dispatch])
}