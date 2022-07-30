/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { useLocation, useParams } from 'react-router-dom'
import { Layout } from '../shared/components/Layout'
import { Loader } from '../shared/components/Loader'
import { postStyle } from '../shared/components/PostCard'
import { PostComments } from '../shared/components/PostComments'
import { PostType } from '../types'
import { useContext } from 'react'
import { LogContext } from '..'
interface LocationState {
  state: PostType
}
export const PostSinglePage = () => {
  const logMessage = useContext<string | undefined>(LogContext)

  console.log(`${logMessage} ${PostSinglePage.name}`)
  const { id } = useParams()
  const { state: post } = useLocation() as LocationState
  if (!id || !post) {
    // TODO add error message
    return null
  }
  return (
    <Layout>
      <div css={postStyle}>
        <div className="post-heading">
          <h2 className="title">{post.title}</h2>
          <span className="user">{post.user.name}</span>
        </div>
        <p tw="py-4">{post.body}</p>
        <PostComments id={post.id} />
      </div>{' '}
    </Layout>
  )
}
