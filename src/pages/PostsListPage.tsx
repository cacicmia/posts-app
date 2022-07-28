import { useState } from 'react'
import { Layout } from '../shared/components/Layout'
import { Loader } from '../shared/components/Loader'
import { PostCard } from '../shared/components/PostCard'
import { usePosts } from '../shared/hooks/usePosts'
import { useUsers } from '../shared/hooks/useUsers'
import { PostType, User } from '../types'

export const PostsListPage = () => {
  const users = useUsers()
  const { data, error, loading } = usePosts()
  if (error || !data || !users) {
    // TODO add error message

    return null
  }
  if (loading) {
    return <Loader />
  }

  const posts = data.map((post: PostType) => ({
    ...post,
    user: users.find((user: User) => user.id === post.userId)
  }))

  return (
    <Layout>
      {posts.map((post: PostType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}
