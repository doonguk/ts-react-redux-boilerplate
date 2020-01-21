// import { createAction } from "typesafe-actions"

export const GET_EMPLOYEES = 'employees/GET_EMPLOYEES'

export const getEmployees = () => ({
  type : GET_EMPLOYEES,
  payload : {
    url : 'http://dummy.restapiexample.com/api/v1',
    method : 'get',
    path : 'employees'
  }
})
