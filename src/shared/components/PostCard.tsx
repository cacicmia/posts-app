/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import { PostType } from '../../types'
import { PostComments } from './PostComments'
import { useContext } from 'react'
import { LogContext } from '../..'

interface IPostCardProps {
  post: PostType
}
export const postStyle = css`
  ${tw`w-full flex flex-col items-start  my-4 p-2`}

  .post-heading {
    ${tw` flex flex-col lg:flex-row w-full justify-between	`}
  }
  .title {
    ${tw`font-semibold `}
  }
  .user {
    ${tw`self-end py-2`}
  }
`
export const linkStyle = css`
  ${postStyle}
  &:hover {
    ${tw` bg-gray-50 rounded-xl `}
    .post-heading {
      ${tw`text-green-700 `}
    }
  }
`
export const PostCard = (props: IPostCardProps) => {
  const logMessage = useContext<string | undefined>(LogContext)
  console.log(`${logMessage} ${PostCard.name}`)

  const { post } = props
  return (
    <Link to={`/post/${post.id}`} state={post} css={linkStyle}>
      <div>
        <div className="post-heading">
          <h2 className="title">{post.title}</h2>
          <span className="user">{post.user.name}</span>
        </div>
        <PostComments id={post.id} />
      </div>
    </Link>
  )
}
