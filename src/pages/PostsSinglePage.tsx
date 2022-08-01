/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { useLocation, useParams } from 'react-router-dom'

import { PostType, User } from '../types'
import { useContext, useEffect, useState } from 'react'
import { LogContext } from '..'
import { ErrorMessage } from '../shared/components/ErrorMessage'

import { PostSingle } from './PostSingle'
import { PostDataWrapper } from './PostDataWrapper'
interface LocationState {
  state: PostType
}

export const PostSinglePage = () => {
  const logMessage = useContext<string | undefined>(LogContext)
  console.log(`${logMessage} ${PostSinglePage.name}`)
  const { state: post } = useLocation() as LocationState
  const { id } = useParams()

  if (!id) {
    return <ErrorMessage title="Something went wrong" />
  }
  if (!post) {
    return <PostDataWrapper id={id} />
  } else {
    return <PostSingle post={post} />
  }
}
