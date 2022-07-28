import { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../../axios'

export const usePostComments = (id: number | string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        setLoading(true)
        const res: AxiosResponse = await axiosInstance.get(`/posts/${id}/comments`, {
          signal: controller.signal
        })
        setData(res.data)
      } catch (err) {
        //@ts-ignore TODO
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
