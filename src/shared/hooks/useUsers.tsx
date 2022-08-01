import { AxiosResponse } from 'axios'
import { useState, useEffect, createContext, FC, useContext } from 'react'
import { axiosInstance } from '../../axios'
import { User } from '../../types'

export const Context = createContext<User[]>([])

export const useApiUsers = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        setLoading(true)
        const res: AxiosResponse = await axiosInstance.get(`/users`, {
          signal: controller.signal
        })
        setData(res.data)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [])

  return { data, error, loading }
}
export const useUsers = () => {
  return useContext(Context)!
}

export const UsersContext: FC<any> = (props) => {
  const { data: users, error, loading } = useApiUsers()

  if (error) {
    throw new Error()
  }
  if (loading || !users) {
    return null
  }

  return <Context.Provider value={users}>{props.children}</Context.Provider>
}
