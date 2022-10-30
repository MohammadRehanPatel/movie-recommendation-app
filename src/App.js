import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
// import Footer from './components/Footer';
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
          <Navbar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
