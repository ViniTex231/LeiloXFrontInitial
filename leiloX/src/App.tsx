import './App.css'
import ImovelRegister from './pages/Register/Imovel/ImovelRegister'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/imovel' element={<ImovelRegister />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
