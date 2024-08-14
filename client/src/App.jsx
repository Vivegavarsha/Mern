import React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import Read from "./Read";
import View from "./View";
import Decor from "./Decor";
import Jewel from "./Jewel";
import Gift from "./Gift";
import Popup from "./Popup";
import Checkout from "./Checkout";
import RazorpayComponent from "./RazorpayComponent";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Popup" element={<Popup />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Read" element={<Read />}></Route>
        <Route path="/View" element={<View />}></Route>
        <Route path="/Decor" element={<Decor/>}></Route>
        <Route path="/Jewel" element={<Jewel/>}></Route>
        <Route path="/Gift" element={<Gift/>}></Route>
        
        <Route path = "/Checkout" element = {<Checkout/>}></Route>
        <Route path = "/Pay" element = {<RazorpayComponent/>}></Route>

      </Routes>
    </BrowserRouter>
   
  
  );
}
