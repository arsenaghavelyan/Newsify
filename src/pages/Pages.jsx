import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout"
import Saves from "../components/Saves"
import Search from '../components/Search'
import App from '../App'

export default function Pages() {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<App />
                },
                {
                    path:"search",
                    element:<Search />
                },
                {
                    path:"basket",
                    element:<Saves />
                }
            ]
        }
    ])
    return (
        <div> 
            <RouterProvider  router={router}/>
        </div>
    )
}
