import './App.css'
import {Header} from './Header.tsx';
import {BestSellers} from './BestSellers.tsx';
import {Route, Routes} from 'react-router';
import {Product} from './Product.tsx';
import {NotFound} from './NotFound.tsx';

function App() {

  return (
    <div className={'appContainer'}>
      <Header/>
      <hr/>
      <Routes>
        <Route path="/" element={<BestSellers/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
