import './App.css'
import ImovelRegister from './pages/Register/Imovel/ImovelRegister'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/imovel' element={<ImovelRegister />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
