/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { usePostComments } from '../hooks/usePostComments'
import { Loader } from './Loader'
import { PostComment } from './PostComment'

interface IPostCommentsProps {
  id: number
}

export const PostComments = (props: IPostCommentsProps) => {
  const { id } = props
  const { data: comments, error, loading } = usePostComments(id)
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
