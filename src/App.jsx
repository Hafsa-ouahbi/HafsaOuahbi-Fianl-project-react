import Nav from "./layout/nav"
import Hero from "./pages/home/partials/hero"
import cards from "./pages/home/partials/cards"

function App() {
  return (
    <>
    <Nav />
    <Hero />
    <cards />


      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </>
  )
}

export default App
