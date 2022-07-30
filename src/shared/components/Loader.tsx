/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from 'react'
import tw from 'twin.macro'
import { LogContext } from '../..'

const loaderContainerStyle = css`
  ${tw`w-full flex items-center justify-center p-4`}
`
const loaderStyle = css`
  ${tw` border border-b-blue-400 border-8 w-24 h-24 animate-spin rounded-full`}
`
export const Loader = () => {
  const logMessage = useContext<string | undefined>(LogContext)
  console.log(`${logMessage} ${Loader.name}`)
  return (
    <div css={loaderContainerStyle}>
      <div css={loaderStyle}></div>
    </div>
  )
}
