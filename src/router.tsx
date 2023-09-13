import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { App } from './App'
import { Profile } from './components/auth/profile'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'

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
    element: <div>check email</div>,
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
    path: '/',
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
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
