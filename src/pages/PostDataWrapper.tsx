import { useState, useEffect, useContext } from 'react'
import { LogContext } from '..'
import { ErrorMessage } from '../shared/components/ErrorMessage'
import { Loader } from '../shared/components/Loader'
import { usePost } from '../shared/hooks/UsePost'
import { useUsers } from '../shared/hooks/useUsers'
import { PostType, User } from '../types'
import { PostSingle } from './PostSingle'

interface IWithPostDatProps {
  id: number | string
}
export const PostDataWrapper = (props: IWithPostDatProps) => {
  const logMessage = useContext<string | undefined>(LogContext)
  console.log(`${logMessage} ${PostDataWrapper.name}`)
  const { id } = props
  const [post, setPost] = useState<PostType | undefined>()
  const users = useUsers()

  const { data, error, loading } = usePost(id)
  useEffect(() => {
    if (data) {
      setPost({
        ...data,

        user: users.find((user: User) => user.id === data.userId)
      })
    }
  }, [data])
  if (loading || !data) {
    return <Loader />
  }
  if (error || !post) {
    return <ErrorMessage title="Something went wrong" />
  }

  return <PostSingle post={post} />
}
