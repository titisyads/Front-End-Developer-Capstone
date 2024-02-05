//import logo from './logo.svg';
import './App.css'
import HomePage from "./pages/HomePage"
import Header from './components/Header'
import Footer from './components/Footer'
import BookingPage from './pages/BookingPage'
import ConfirmationPage from './pages/ConfirmationPage'

import {
  Route,
  Routes
} from "react-router-dom"




function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        </Routes>
        <Footer />
      </>

  );
}

export default App;
