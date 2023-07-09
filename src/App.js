import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Customize from "./components/Customize";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Custom from './components/Custom.js'

function App() {
  const Home = () => {
    return <div>
      <Navbar></Navbar>
      <Customize></Customize>
      <Card></Card>
    </div>
  }
  return (
    <BrowserRouter>

    <div className="page">
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<Custom />} path='/custom-reports'/>
        </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
