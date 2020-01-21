import { createReducer } from "typesafe-actions"
import { EmployeesAction, EmployeesState } from "./types"
import { GET_EMPLOYEES } from "./actions"

const initialState: EmployeesState = []

export default createReducer<EmployeesState, EmployeesAction>(initialState, {
  [GET_EMPLOYEES] : (state, {payload : data}) => {
    return [...data]
  }
})