import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Wishlist } from './pages/Wishlist';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  );
}

export default App;
