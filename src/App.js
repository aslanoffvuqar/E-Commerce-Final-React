import "./Components/Global-Css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Foldder-Header/Header";
import Nav from "./Components/Foldder-Nav/Nav";
import Footer from "./Components/Foldder-Footer/Footer";
import Home from "./Components/Home";
import Aside from "./Components/Foldder-Aside/Aside";
import MainCarousel from "./Components/Folder-Main/MainCarosel";
import Section_one from "./Components/Section_one_main/Section_one";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Aside />
      {/* <MainCarousel/> */}
      <Section_one />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
