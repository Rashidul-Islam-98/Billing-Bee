import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles.css";
import Login from './components/login'
import AddItem from './components/Item/additem';
import Dashboard from './components/dashboard';
import CreateInvoice from './components/create_invoice';
import SendInvoice from './components/send_invoice';
import ViewTemplate from './components/view_template';
import AddCustomer from './components/add_new_customer';
import ImportCustomer from './components/import_customer';


const router = createBrowserRouter([
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/home',
        element: <Dashboard />
      },
      {
        path: '/add-item',
        element: <AddItem />
      },
      {
        path: '/create-invoice',
        element: <CreateInvoice />
      },
      {
        path: '/send-invoice',  
        element: <SendInvoice />
      },
      {
        path: '/view-templates',
        element: <ViewTemplate />
      },
      {
        path: '/add-customer',
        element: <AddCustomer />
      },
      {
        path: '/import-customer',
        element: <ImportCustomer />
      }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router}/>
    
  </StrictMode>,
);
