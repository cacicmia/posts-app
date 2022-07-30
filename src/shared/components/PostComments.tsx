/** @jsxImportSource @emotion/react */
import { useContext } from 'react'
import tw from 'twin.macro'
import { LogContext } from '../..'
import { usePostComments } from '../hooks/usePostComments'
import { Loader } from './Loader'
import { PostCard } from './PostCard'
import { PostComment } from './PostComment'

interface IPostCommentsProps {
  id: number | string
}

export const PostComments = (props: IPostCommentsProps) => {
  const logMessage = useContext<string | undefined>(LogContext)
  console.log(`${logMessage} ${PostComments.name}`)
  const { id } = props
  const { data: comments, error, loading } = usePostComments(id)
  // TODO add error message

  if (error || !comments) {
    return null
  }
  if (loading) {
    return <Loader />
  }
  return (
    <div tw="flex flex-col">
      <p>Post comments:</p>
      {comments.map((comment: any) => (
        <PostComment comment={comment} key={comment.id} />
      ))}
    </div>
  )
}
