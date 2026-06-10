import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Event from "./components/Event";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MyTicket from "./components/Tickets";
import About from "./components/About";
import Pricing from "./components/Pricing";
import SignIn from "./components/SignIn";


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

        <Route
          path="/tickets"
          element={
            <>
              <Navbar />
              <MyTicket />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/pricing"
          element={
            <>
              <Navbar />
              <Pricing />
            </>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <SignIn />
            </>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
