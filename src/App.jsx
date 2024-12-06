import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
