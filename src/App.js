import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Customize from "./components/Customize";
import Faq from "./components/Faq";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Customize></Customize>
      <Card></Card>
      <Faq></Faq>
    </div>
  );
}

export default App;
//testings