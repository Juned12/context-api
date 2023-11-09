import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Header from './components/header';
import Home from './components/home';
import CartPage from './components/cart';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
