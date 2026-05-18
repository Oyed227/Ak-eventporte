import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Event from "./components/Event";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MyTicket from "./components/Tickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <Event />
            </>
          }
        />

        <Route path="/events/:id" element={<Details />} />

        {/* FIXED */}
        <Route
          path="/tickets"
          element={
            <>
              <Navbar />
              <MyTicket />
            </>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
