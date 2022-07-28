/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { css } from '@emotion/react'
const commentStyle = css`
  ${tw`w-full p-4 border-b border-gray-500 flex flex-col self-center mx-auto bg-blue-100`}
`

export const PostComment = ({ comment }: any) => {
  return (
    <div css={commentStyle} key={comment.id}>
      <div tw="flex flex-col md:flex-row md:justify-between">
        <h4>{comment.name}</h4>
        <span tw="self-end text-xs py-2">{comment.email}</span>
      </div>
      <p>{comment.body}</p>
    </div>
  )
}
