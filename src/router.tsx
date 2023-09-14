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
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { useAuthMeQuery } from './services/auth-api/auth-api'

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
    element: <div>forgot_password</div>,
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
  const { data, isSuccess } = useAuthMeQuery()
  const isAuthenticated = data && isSuccess

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export const Router = () => {
  const { isLoading } = useAuthMeQuery()

  if (isLoading) return <div>loading</div>

  return <RouterProvider router={router} />
}
