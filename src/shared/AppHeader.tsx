/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from 'react'
import tw from 'twin.macro'
import { LogContext } from '..'
import { pageContentStyle } from './components/Layout'
const headerStyle = css`
  ${tw` bg-green-200 text-black h-12 w-full p-4 flex items-center justify-start`}
`
const headingStyle = css`
  ${tw`text-left`}
`
export const AppHeader = () => {
  const logMessage = useContext<string | undefined>(LogContext)

  console.log(`${logMessage} ${AppHeader.name}`)

  return (
    <header css={headerStyle}>
      <h2 css={[pageContentStyle, headingStyle]}>Lorem ipsum</h2>
    </header>
  )
}
