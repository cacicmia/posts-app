export interface User {
  id: number
  name: string
  phone: string
  username: string
  website: string
  address: any
  company: any
}
export interface PostType {
  id: number
  userId: number
  title: string
  body: string
  user: User
}
