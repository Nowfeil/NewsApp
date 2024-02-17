import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
let page = 6;
const router = createBrowserRouter([
  
  {
    path:'/general',
    element:<div className='container'><h1 className='font-monospace text-center'>General News</h1><News   pageSize={page} category='general'/></div>,
    basename: "/MyNews"
  },
  {
    path:'/sports',
    element:<div className='container'><h1 className=' text-warning text-center'>Sports News</h1><News   pageSize={page} category='sports'/></div>
  },
  {
    path:'/games',
    element:<div className='container'><h1 className=' text-warning text-center'>Games News</h1><News   pageSize={page} category='games'/></div>
  },
  {
    path:'/science',
    element:<div className='container'><h1 className=' text-warning text-center'>Science News</h1><News   pageSize={page} category='science'/></div>
  },
  {
    path:'/technology',
    element:<div className='container'><h1 className=' text-warning text-center'>Technology News</h1><News   pageSize={page} category='technology'/></div>
  },
  {
    path:'/health',
    element:<div className='container'><h1 className=' text-warning text-center'>Health News</h1><News   pageSize={page} category='health'/></div>
  },
  {
    path:'/buisness',
    element:<div className='container'><h1 className=' text-warning text-center'>Buisness News</h1><News   pageSize={page} category='buisness'/></div>
  },
  {
    path:'/entertainment',
    element:<div className='container'><h1 className=' text-warning text-center'>Entertainment News</h1><News   pageSize={page} category='entertainment'/></div>
  },
]);
const App =()=> {
    return (     
      <div>

        <Navbar/>
        <RouterProvider router={router}></RouterProvider>
      </div>
    )
  };
export default App