import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Profile } from './components/auth/profile'
import { SignIn } from './pages/sign-in'

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <div> sign up</div>,
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
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
