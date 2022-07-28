import { Layout } from '../shared/components/Layout'
import { Loader } from '../shared/components/Loader'
import { PostCard } from '../shared/components/PostCard'
import { usePosts } from '../shared/hooks/usePosts'
import { PostType } from '../types'
import { PostSinglePage } from './PostsSinglePage'

export const PostsListPage = () => {
  const { data: posts, error, loading } = usePosts()
  console.log(posts, error, loading)
  if (error || !posts) {
    return null
  }
  if (loading) {
    return <Loader />
  }
  return (
    <Layout>
      {posts.map((post: PostType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}
