/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'

const loaderContainerStyle = css`
  ${tw`w-full flex items-center justify-center p-4`}
`
const loaderStyle = css`
  ${tw` border border-b-blue-400 border-8 w-24 h-24 animate-spin rounded-full`}
`
export const Loader = () => {
  return (
    <div css={loaderContainerStyle}>
      <div css={loaderStyle}></div>
    </div>
  )
}
