import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Customize from "./components/Customize";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Customize></Customize>
      <Card></Card>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
