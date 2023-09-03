import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SummonerByName from "./Pages/SummonerByName.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LastGameByName from "./Pages/LastGameByName.tsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <SummonerByName/>
        },
        {
            path: "/match",
            element: <LastGameByName/>
        }
    ]
)


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
