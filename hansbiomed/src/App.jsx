import './App.css'
import './index.css'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      {/* <Header/> */}
    {/* <Main/> */}
    {/* <div className='mt-24'></div> */}
    {/* <ProductsPage productType={"Device"}/> */}
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
