import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <div>
        <Navbar />
        <Home />
        <Service/>  
        <About/>
        <Footer/>
      </div>
    
  },
  {
    path: 'about',
    element: 
      <div>
        <Navbar />
        <About />
        <Footer/>
      </div>
    
  },
  {
    path: 'service', 
    element: 
      <div>
        <Navbar />
        <Service />
        <Footer/>
      </div>
  },
  {
    path: '*',
    element: <NotFound />
  },
]);


function App() {
  

  return (
    <>
      <div>
      <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
