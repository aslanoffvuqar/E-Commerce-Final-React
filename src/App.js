import "./Components/Global-Css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/HeaderBar/Header";
import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/FooterBar/Footer";
import Home from "./Components/Home";
import Aside from "./Components/AsideBar/Aside";
import MainCarousel from "./Components/Folder-Main/MainCarosel";
import Categories from "./Components/Categories/Categories";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Aside/>
      {/* <MainCarousel/> */}
      <Categories/>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
