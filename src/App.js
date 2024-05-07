import "./Components/Global-Css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Foldder-Header/Header";
import Nav from "./Components/Foldder-Nav/Nav";
import Footer from "./Components/Foldder-Footer/Footer";
import Home from "./Components/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
