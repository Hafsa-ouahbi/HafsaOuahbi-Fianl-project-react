import Nav from "./layout/nav"
import Home from "./pages/home"


function App() {
  return (
    <>
    <div className="flex flex-col">
    <Nav></Nav>
    <Home></Home>
    </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </>
  )
}

export default App
