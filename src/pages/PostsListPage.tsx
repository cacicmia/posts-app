import { useContext, useEffect, useState } from 'react'
import { LogContext } from '..'
import { Layout } from '../shared/components/Layout'
import { Loader } from '../shared/components/Loader'
import { PostCard } from '../shared/components/PostCard'
import { SearchBar } from '../shared/components/SearchBar'
import { usePosts } from '../shared/hooks/usePosts'
import { useUsers } from '../shared/hooks/useUsers'
import { PostType, User } from '../types'

export const PostsListPage = () => {
  const logMessage = useContext<string | undefined>(LogContext)

  console.log(`${logMessage} ${PostsListPage.name}`)
  const users = useUsers()
  const [userId, setUserId] = useState<number | undefined>()
  const [posts, setPosts] = useState<PostType[]>([])

  const { data, error, loading } = usePosts(userId)
  useEffect(() => {
    if (data) {
      setPosts(
        data.map((post: PostType) => ({
          ...post,
          user: users.find((user: User) => user.id === post.userId)
        }))
      )
    }
  }, [data])

  if (error || !data || !users) {
    // TODO add error message

    return null
  }
  if (loading) {
    return <Loader />
  }
  return (
    <Layout>
      <SearchBar users={users} setUserId={setUserId} userId={userId} />
      {posts.map((post: PostType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}
