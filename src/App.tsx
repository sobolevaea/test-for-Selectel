import { Routes, Route } from "react-router-dom"
import Home from "./components/HomePage"
import Menu from "./components/MenuPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}

export default App
