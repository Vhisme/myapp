import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counters from "./Counter";
import ErrorBoundary from "./ErrorBoundary";
import ErrorTest from "./ErrorTest";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/counter" element={<Counters/>}/>
      <Route path="/" element={<ErrorBoundary/>}/>
      <Route path="/" element={<ErrorTest/>}/>
      </Routes>
    </Router>
    
  )
}



export default App;
