import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedbooks",
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('../books.json')
      },
      {
        path:"/pagestoread",
        element:<PagesToRead></PagesToRead>,
        loader:()=> fetch('../books.json')
      },
      {
        path:"/book/:id",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
