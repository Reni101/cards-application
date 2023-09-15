import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { App } from './App'
import { Profile } from './components/auth/profile'
import { CheckEmail } from './pages/check-email'
import { CreateNewPassword } from './pages/create-new-password'
import { ForgotPassword } from './pages/forgot-password'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { useGetMeQuery } from './services/auth-api/auth-api'

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/check_email',
    element: <CheckEmail />,
  },
  {
    path: '/forgot_password',
    element: <ForgotPassword />,
  },
  {
    path: '/create-new-password/:token',
    element: <CreateNewPassword />,
  },
  {
    path: '/*',
    element: <div> noteFount</div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/decks',
    element: <div>table</div>,
  },
]

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

function PrivateRoutes() {
  const { data } = useGetMeQuery()
  const isAuthenticated = data && data?.success !== false

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export const Router = () => {
  const { isLoading } = useGetMeQuery()

  if (isLoading) return <div>loading</div>

  return <RouterProvider router={router} />
}
