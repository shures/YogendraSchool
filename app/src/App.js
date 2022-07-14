import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./app/components/home";
import Contact from './app/components/contact'
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
  );
}
export default App;
