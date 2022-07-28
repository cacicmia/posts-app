/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import { PostType } from '../../types'

interface IPostCardProps {
  post: PostType
}
export const postStyle = css`
  ${tw`w-full flex flex-col items-start border border-transparent my-4 p-2`}
  &:hover {
    ${tw`text-green-700 border border-green-700 rounded-xl `}
  }
  .title {
    ${tw`font-semibold `}
  }
`
export const PostCard = (props: IPostCardProps) => {
  const { post } = props
  return (
    <Link to={`/post/${post.id}`}>
      <div css={postStyle}>
        <h2 className="title">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Link>
  )
}
