import { createReducer } from "typesafe-actions"
import { EmployeesAction, EmployeesState } from "./types"
import {EMPLOYEE} from "./actions"

const initialState: EmployeesState = {
  employees : [],
  status : "INIT"
}

export default createReducer<EmployeesState, EmployeesAction>(initialState, {
  [EMPLOYEE.REQUEST] : (state, action) => {
    console.log('action',action)
    return {...state, status : 'LOADING'}
  },
  [EMPLOYEE.FAILURE] : (state, action) => {
    console.log('action',action)
    return { ...state, status : 'FAILURE'}
  },
  [EMPLOYEE.SUCCESS] : (state, action) => {
    console.log('action',action)
    return { ...state, status : 'SUCCESS'}
  }
})