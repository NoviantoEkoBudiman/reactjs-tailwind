// Components
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// Pages
import Homepage from "./pages/Homepage"

function App(){
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      
      {/* Content */}
      <Homepage/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App