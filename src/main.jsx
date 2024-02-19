import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import './index.css'
//páginas
import Home from './routes/Home.jsx'
import NewProduct from './routes/NewProduct.jsx'
import Login from './routes/Login.jsx'
import Order from './routes/Order.jsx'
import Product from './routes/Product.jsx'
import EditProduct from './routes/EditProduct.jsx'

//criar um objeto de configuração de roteamento
const router = createBrowserRouter([
  //elemento principal que vai abrigar as páginas que eu posso repetir (como barra de navegação/rodapé):
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/new",
        element: <NewProduct/>
      },      
      {
        path: "/posts/:id",
        element: <Product/>
      }, 
      {
        path: "/posts/edit/:id",
        element: <EditProduct/>
      },
      {
        path: "/order",
        element: <Order/>
      },
      {
        path: "login",
        element: <Login/>
      },
    ]
  }
  //nesse caso o element funciona como um "container" e os children como as rotas
  //as rota "/" carrega todos os produtos e a rota "/new" carrega a rota de createProduct
])

//para criar componentes que acessem essas páginas a gente cria a pasta 'routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
