import { FC, ReactNode, useContext } from 'react'
/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from '@emotion/react'
import tw from 'twin.macro'
import { LogContext } from '../..'
import { AppHeader } from '../AppHeader'
export const pageContentStyle = css`
  ${tw`w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mx-auto`}
`
interface ILayoutProps {
  customCss?: Interpolation<Theme>
  children: ReactNode
}

export const Layout: FC<ILayoutProps> = (props) => {
  const logMessage = useContext<string | undefined>(LogContext)

  console.log(`${logMessage} ${Layout.name}`)
  const { customCss, children } = props
  return (
    <>
      <AppHeader />
      <div css={[pageContentStyle, customCss]}>{children}</div>
    </>
  )
}
