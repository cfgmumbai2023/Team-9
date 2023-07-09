import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Customize from "./components/Customize";
import Footer from "./components/Footer";

//changes by adarsh start here.
import { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home.js';
import AutoReports from './components/AutoReports';
import Custom from './components/Custom.js';

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Customize></Customize>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
