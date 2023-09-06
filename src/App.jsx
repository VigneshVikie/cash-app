import "/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <MobileNavbar/>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
