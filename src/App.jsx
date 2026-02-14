import Footer1 from "./layout/footer"
import Nav from "./layout/nav"
import Home from "./pages/home"
import Shop from "./pages/shop"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer1 />
    </div>
  )
}

export default App
