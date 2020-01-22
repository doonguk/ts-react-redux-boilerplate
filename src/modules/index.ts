import { combineReducers } from "redux"
import { all } from 'redux-saga/effects'
import getEmployeesWatcher from "./employees/sagas"
import todos from './todos'
import employees from './employees'

const rootReducer = combineReducers({
  todos,
  employees
})

export function* rootSaga() {
  yield all([
    getEmployeesWatcher()
  ])
}
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>