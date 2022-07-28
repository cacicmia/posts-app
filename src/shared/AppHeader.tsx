/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from 'react'
import tw from 'twin.macro'
import { Context } from '..'
const headerStyle = css`
  ${tw` bg-green-200 text-black h-12 w-full p-4 flex items-center justify-start`}
`
export const AppHeader = () => {
  const message = useContext<string | undefined>(Context)

  //@ts-ignore
  console.log(`${message} ${AppHeader.type ?? ''} `)
  return <header css={headerStyle}>Lorem ipsum</header>
}
