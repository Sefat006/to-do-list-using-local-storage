import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Trash from "../Trash/Trash";
import ViewList from './../Pages/ViewList';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/trash',
                element: <Trash></Trash>
            },
            {
                path: '/viewList',
                element: <ViewList></ViewList>
            },
        ]
    }
])

export default Router;