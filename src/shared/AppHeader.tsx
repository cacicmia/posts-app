/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { LogContext } from '..'
import { pageContentStyle } from './components/Layout'
const headerStyle = css`
  ${tw` bg-green-200 text-black h-12 w-full px-4 flex items-center justify-start`}
`
const headingStyle = css`
  ${tw`text-left mx-auto`}
`
export const AppHeader = () => {
  const logMessage = useContext<string | undefined>(LogContext)

  console.log(`${logMessage} ${AppHeader.name}`)

  return (
    <header css={headerStyle}>
      <Link to="/" css={[pageContentStyle, headingStyle]}>
        <h2 css={[headingStyle]}>Posts page</h2>
      </Link>
    </header>
  )
}
