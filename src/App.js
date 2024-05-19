import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Wishlist } from './pages/Wishlist';
import { Cart } from './pages/Cart';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
