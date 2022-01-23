import "./App.css";
import Routes from "./config/Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import BottomNav from "./components/MainNavbar/BottomNav";
import MainNav from "./components/MainNavbar/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import "./../node_modules/touch-loader/touchLoader";
import CopyWrite from "../src/components/CopyWrite__footer/LastFooter";

function App() {
  // Preloader

  return (
    <BrowserRouter>
      <MainNav />
      <div className="App">
        <Routes />
      </div>

      <Footer />
      <BottomNav />
      <CopyWrite />
    </BrowserRouter>
  );
}

export default App;
