import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counters from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/counter" element={<Counters/>}/>
      <Route path="/" element={<ErrorBoundary/>}/>
      </Routes>
    </Router>
    
  )
}



export default App;
