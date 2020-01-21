import {ActionType} from "typesafe-actions"
import {getEmployees} from "./actions"

const actions = {getEmployees}
export type EmployeesAction = ActionType<typeof actions>
export type Employee = {
  id: number
  employee_name: string
  employee_salary: number
  employee_age: number
  profile_image: string
}
export type EmployeesState = Employee[]