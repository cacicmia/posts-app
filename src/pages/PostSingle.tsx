/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { Layout } from '../shared/components/Layout'
import { PostType } from '../types'
import { postStyle } from '../shared/components/PostCard'
import { PostComments } from '../shared/components/PostComments'
export interface IPostSingleProps {
  post: PostType
}
export const PostSingle = ({ post }: IPostSingleProps) => {
  return (
    <Layout>
      <div css={postStyle}>
        <div className="post-heading">
          <h2 className="title">{post!.title}</h2>
          <span className="user">{post!.user?.name}</span>
        </div>
        <p tw="py-4">{post!.body}</p>
        <PostComments id={post!.id} />
      </div>
    </Layout>
  )
}
