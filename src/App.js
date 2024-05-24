import "./Components/Global-Css/App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/HeaderBar/Header";
import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/FooterBar/Footer";
import Home from "./Components/Home";
import Aside from "./Components/Foldder-Aside/Aside";
import Login from "./Components/Login/Login";


function App() {
import Aside from "./Components/AsideBar/Aside";
import About from "./Components/AboutBar/About"
import Section_one from "./Components/Section_one_main/Section_one";
import Categories from "./Components/Categories/Categories";
import SectionFour from "./Components/Section_four_main/SectionFour";
import NewArrival from "./Components/NewArrivalBar/NewArrival";

import BestProducts from "./Components/Best_product/BestProduct";
import ExploreProduct from "./Components/Explore_product/ExploreProduct";

import Contact from "./Components/Contact/Contact";


function AppContent() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Aside/>
      

      {location.pathname !== "/About" &&
      location.pathname !== "/Contact" && 
       location.pathname !== "/Login" &&(
        <>
          <Aside />
          <Section_one />
          <Categories />
          <BestProducts />
          <SectionFour />
          <ExploreProduct />
          <NewArrival />
        </>
      )}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
