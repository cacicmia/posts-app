/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from 'react'
import tw from 'twin.macro'
import { LogContext } from '../..'

interface IErrorMessageProps {
  title?: string
  detail?: string
}
const errorContainerStyle = css`
  ${tw`bg-red-700 text-white rounded-2xl p-4 m-4`}
`
export const ErrorMessage = (props: IErrorMessageProps) => {
  const { title, detail } = props
  const logMessage = useContext<string | undefined>(LogContext)

  console.log(`${logMessage} ${ErrorMessage.name}`)

  return (
    <div css={errorContainerStyle}>
      {title && <p>{title}</p>}
      {detail && <p>{detail}</p>}
    </div>
  )
}
