import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { LogContext } from '.'
import { PostsListPage } from './pages/PostsListPage'
import { PostSinglePage } from './pages/PostsSinglePage'

export const AppRouter = () => {
  const logMessage = useContext<string | undefined>(LogContext)

  console.log(`${logMessage} ${AppRouter.name}`)

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
