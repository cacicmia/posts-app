import { useParams } from 'react-router-dom'
import { Layout } from '../shared/components/Layout'
import { Loader } from '../shared/components/Loader'

export const PostSinglePage = () => {
  const { id } = useParams()
  if (!id) {
    return null
  }
  // if (error || !post) {
  //   return null
  // }
  // if (loading) {
  //   return <Loader />
  // }
  // console.log(post)
  return <Layout>{id}</Layout>
}
