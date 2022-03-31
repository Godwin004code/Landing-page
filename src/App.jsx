import Homepage from "./Components/Homepage"

import { Router , Routes, Route, BrowserRouter } from "react-router-dom";
import AppHero from "./Components/AppHero";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <BrowserRouter>
    <AppHero />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App