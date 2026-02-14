import { Routes, Route } from "react-router-dom"
import Footer1 from "./layout/footer"
import Nav from "./layout/nav"
import Home from "./pages/home"
import Shop from "./pages/shop"
import ProductDetail from "./pages/shop/ProductDetails"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer1 />
    </div>
  )
}

export default App