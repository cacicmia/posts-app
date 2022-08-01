import { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'
import { axiosInstance, IAxiosProps } from '../../axios'

export const usePosts = (userId: number | undefined) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      const url = userId ? `posts?userId=${userId}` : '/posts'
      try {
        setLoading(true)
        const res: AxiosResponse = await axiosInstance.get(url, {
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
  }, [userId])

  return { data, error, loading }
}
