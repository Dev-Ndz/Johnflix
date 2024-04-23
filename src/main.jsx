import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Register from './routes/Register.jsx';
import Login from './routes/login.jsx';
import Home from './routes/Home.jsx';
import TvShow, {loader as TvShowLoader} from './routes/TvShow.jsx';
import Error from './routes/Error.jsx';
import LandingPage from './routes/LandingPage.jsx';
import Tv from './components/home/Tv.jsx'
import NewAndPopular from './components/home/NewAndPopular.jsx';
import Movies from './components/home/Movies.jsx';
import Movie, {loader as MovieLoader} from './routes/Movie.jsx';
import Search from './components/home/Search.jsx'

import './index.css'
import ContextProvider from './context/ContextProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children:[
      {
        index: "register",
        element: <Register />,
      },
      {
        path:"/login",
        element: <Login />
      }
    ]
  },
  {
    path: "/home",
    element: <Home />,
    children:[
      {
        index: "new-and-popular",
        element: <NewAndPopular />,
      },
      {
        path:"tv",
        element: <Tv />
      },
      {
        path:"movies",
        element: <Movies />
      },
      {
        path:"search/",
        element: <Search />
      }
    ]
  },
  {
    path: "tv-show/:id",
    element: <TvShow />,
    loader:TvShowLoader
  },
  {
    path: "movie/:id",
    element: <Movie />,
    loader:MovieLoader
  },
  {
    path: "*",
    element: <Error />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router = {router} />
    </ContextProvider>
   

  </React.StrictMode>,
)
