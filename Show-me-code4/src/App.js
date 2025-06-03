import React from "react";
import ReactDOM from "react-dom/client";
import Haeder from "./components/Header.js";
import Body from "./components/Body.js";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./Error.js";
import ResturentMenu from "./components/ResturentMenu.js";
import UserClass from "./components/UserClass.js";
import { User } from "./components/User.js";



const AppLayout = () => {
  return (
    <div className="app">
      <Haeder />
      <Outlet/> 
    </div>
  );
};


const  appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
    {
    path:"/",
    element:<Body/>
  },{
    path:"/about",
    element:<UserClass/>
  },{
    path:"/contact",
    element:<User/>
  },{
    path:"/restaurent/:resId",
    element:<ResturentMenu/>
  },
  
    ],
    errorElement:<Error/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
