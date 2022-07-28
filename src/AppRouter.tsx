import { Navigate } from 'react-router-dom'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { PostsListPage } from './pages/PostsListPage'
import { PostSinglePage } from './pages/PostsSinglePage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<PostsListPage />} />
        <Route path="/post/:id" element={<PostSinglePage />} />
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
