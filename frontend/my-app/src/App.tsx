import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { Test } from "./Pages/Test";
import { useState, useEffect } from "react";
import { BookingPage } from "./Pages/BookingPage";

export default function App() {

  useEffect(()=>{
    console.log(import.meta.env.VITE_API_URL)
  }, [])

    return(
      <>
        <Router>
          <Routes>
            <Route path="test" element={<Test/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="bookingpage" element={<BookingPage/>}/>
            <Route path="" element={<HomePage/>} />
          </Routes>
        </Router>
      </>
    )
}
