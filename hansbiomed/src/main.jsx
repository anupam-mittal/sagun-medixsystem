import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import ProductsPage from './components/ProductsPage'
import './index.css'
import ProductView from './components/ProductView'
import PR from './components/PR'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Main/>
      },
      {
        path: "Home",
        element: <Main/>
      },
      {
        path: "Biologics",
        element: <ProductsPage productType={"Biologics"}/>,
        // children: [
        //   {
        //     path: 'Biologics/product/:prodID',
        //     element: <ProductView/>
        //   }
        // ] 
      },
      {
        path: "Devices",
        element: <ProductsPage productType={"Devices"}/>,
        // children: [
        //   {
        //     path: 'Devices/product/:prodID',
        //     element: <ProductView/>
        //   }
        // ] 
      },
      {
        path: "product/:prodID",
        element : <ProductView/>
      },
      {
        path : "PR",
        element : <PR/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
)
