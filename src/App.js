import "./App.css";
import Navbar from "./components/Navbar";
import HeaderText from "./components/MainBody";
import MailCards from "./components/MailCards";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeaderText></HeaderText>
      <MailCards></MailCards>
    </div>
  );
}

export default App;
