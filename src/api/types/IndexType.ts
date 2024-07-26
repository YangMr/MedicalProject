export interface LoginParamsType {
  username: string
  password: string
}

export interface StaffParamsType {
  name: string
  username: string
}

export interface StaffResponseType {
  id: number
  username: string
  name: string
  age: number
  mobile: string
  salary: number
  entryDate: string
}
