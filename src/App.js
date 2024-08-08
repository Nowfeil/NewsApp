import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
let page = 6;
const App =()=> {

  const [theme,toggleTheme] = useState('light');
  const toggleMode=()=>{
    if(theme==='light')
    {
      toggleTheme('dark')
    }
    else if(theme==='dark')
    {
      toggleTheme('light')
    }
  }
  const router = createBrowserRouter([
  
    {
      path:'/',
      element:<><Navbar theme={theme} mode={toggleMode} /><h1 className='font-monospace text-center' >General News</h1><News theme={theme}  pageSize={page} category='general'/></>
      
    },
    {
      path:'/sports',
      element:<><Navbar theme={theme} mode={toggleMode}/><h1 className='text-center' >Sports News</h1><News theme={theme} pageSize={page} category='sports'/></>
    },
    {
      path:'/games',
      element:<><Navbar  theme={theme} mode={toggleMode}/><h1 className='text-center' >Games News</h1><News theme={theme} pageSize={page} category='games'/></>
    },
    {
      path:'/science',
      element:<><Navbar theme={theme} mode={toggleMode}/><h1 className='text-center' >Science News</h1><News theme={theme} pageSize={page} category='science'/></>
    },
    {
      path:'/technology',
      element:<><Navbar theme={theme} mode={toggleMode}/><h1 className='text-center' >Technology News</h1><News theme={theme} pageSize={page} category='technology'/></>
    },
    {
      path:'/health',
      element:<><Navbar theme={theme} mode={toggleMode}/><h1 className='text-center' >Health News</h1><News   theme={theme} pageSize={page} category='health'/></>
    },
    {
      path:'/buisness',
      element:<><Navbar theme={theme} mode={toggleMode}/><h1 className='text-center' >Buisness News</h1><News  theme={theme} pageSize={page} category='buisness'/></>
    },
    {
      path:'/entertainment',
      element:<><Navbar theme={theme} mode={toggleMode}/><h1 className='text-center' >Entertainment News</h1><News  theme={theme} pageSize={page} category='entertainment'/></>
    },
    {
      path:'/about',
      element:<><Navbar theme={theme} mode={toggleMode}/><About/></>
    },
  ]);

    return (    
      <>
     {true && <div style={{backgroundColor:theme==='dark'?'rgb(3 39 55)':'white',color:theme==='dark'?'rgb(230 230 230)':'rgb(3 39 55)'}}>
        <RouterProvider router={router}></RouterProvider>
      </div>}
      </>
    )
  };
export default App