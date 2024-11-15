/* router import */
import { Route, Routes } from "react-router-dom"
/* import Components */
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Loginpage from "./Pages/Loginpage"
import Signin from "./Pages/Signin"
import Forgotpassword from "./Pages/Forgotpassword"



function App() {
 
  return (
    <>
    
    
      <Header/>
    
      <Routes>
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/forgotpassword" element={<Forgotpassword/>}/>
      </Routes>
   
    </>
  )
}

export default App
