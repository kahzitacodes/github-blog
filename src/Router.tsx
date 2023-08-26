import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

export const router = createBrowserRouter([
  {
    path: '/', 
    element: <DefaultLayout />,
    children: [
      {
        path: '/', 
        element: <Home />,
      },
      {
        path: '/post/:postId',
        element: <Post />
      }
    ]
  }
])