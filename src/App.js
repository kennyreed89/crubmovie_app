import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-bootstrap";
import NavBar from "./components/NavBar";
import ScrollBar from "./components/ScrollBar.js";
import Carousel from "./components/Carousel";
import PopMovie from "./components/PopMovie";
import PopShows from "./components/PopShows";
import NewTV from "./components/NewTV.js";
import FooterPage from "./components/FooterPage";
import Review from "./components/Review.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Shop from "./pages/Shop.js";
import { Route, Routes } from "react-router-dom";
import ReviewModal from "./components/ReviewModal.js";

function App() {
  const [reviewModalOpen, setReviewModalOpen] =
    useState(false); /* modal is set to false so it dosent show*/

  const [rows, setRows] = useState([
    { name: "", review: "" },
  ]); /* adds new row*/

  const handleDeleteRow = (targetIndex) => {
    setRows(
      rows.filter((_, idx) => idx !== targetIndex)
    ); /* method to delete rows*/
  };
  const handleSubmit = (newRow) => {
    setRows({ ...rows, newRow }); /* when info is submitted a new row is added*/
  };

  return (
    <div>
      <NavBar></NavBar>
      <ScrollBar></ScrollBar>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Carousel></Carousel>
      <PopMovie></PopMovie>
      <PopShows></PopShows>
      <NewTV></NewTV>
      <Review rows={rows} deleteRow={handleDeleteRow}></Review>
      <button class="btn" onClick={() => setReviewModalOpen(true)}>
        Post
      </button>
      {reviewModalOpen && (
        <ReviewModal
          closeReviewModal={() => {
            setReviewModalOpen();
          }}
          onSubmit={handleSubmit}
        />
      )}

      <FooterPage></FooterPage>
    </div>
  );
}

export default App;
