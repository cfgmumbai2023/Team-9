import { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home.js';
import AutoReports from './components/AutoReports';
import Custom from './components/Custom.js';

function App() {
  
  const sidebarItems = [
    <Link to='/'>Home</Link>, 
    <Link to='auto-reports'>Auto Generated Reports</Link>, 
    <Link to='custom-report'>Custom Reports</Link>
  ]

  var sidebarStatus = window.innerWidth < 980;

  function handleClick(){
      if(sidebarStatus == true){
          document.getElementById('sidebar').style.width = '0'
          
      }
      else
          document.getElementById('sidebar').style.width = '300px'
      sidebarStatus = sidebarStatus ? false: true
  }

  return (
    <div className="App">
      
      <div className="header">
          <div className="inner">
          <div id='sidebarbtn' onClick={handleClick}><img width='28px' src='https://freesvg.org/img/menu-icon.png'></img></div>
            <div className="item">Urmi Foundation</div>
          </div>
        </div>
      <div className="main">
      <BrowserRouter>
        <Sidebar items={sidebarItems} handleClick={handleClick}/>
        <div className="page">
            <Routes>
              <Route element={<Home />} path='/'/>
              <Route element={<AutoReports />} path='auto-reports'/>
              <Route element={<Custom />} path='custom-report'/>
            </Routes>
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
