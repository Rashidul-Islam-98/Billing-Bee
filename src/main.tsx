import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";
import Login from './components/login'
import Home from './components/home'
import AddItem from './components/Item/additem';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/add-item',
        element: <AddItem />
      }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router}/>
    
  </StrictMode>,
);
