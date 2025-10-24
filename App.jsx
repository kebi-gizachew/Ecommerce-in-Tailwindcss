import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './Pages/Orders';
import Home from './Pages/Home';
import Check from './Pages/Checkout'
function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/checkout' element={<Check/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}
export default App;





