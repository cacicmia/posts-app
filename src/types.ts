export interface User {
  id: number
  name: string
  phone: string
  username: string
  website: string
  address: any
  email: string
  company: any
}
export interface PostType {
  id: number
  userId: number
  title: string
  body: string
  user: User
}
export interface IDropdownOption {
  label: string
  value: string
}
