import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./app/components/home";
import Contact from './app/components/contact'
import Download from "./app/components/download";
import Teacher from "./app/components/teacher";
import Background from "./app/components/background";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/download' element={<Download/>}/>
              <Route path='/teacher' element={<Teacher/>}/>
              <Route path='/background' element={<Background/>}/>
          </Routes>
      </BrowserRouter>
  );
}
export default App;
