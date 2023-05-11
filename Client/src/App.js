import React from "react";
import Form from "./Component/Form";
import Datasheet from "./Datasheet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/users" element={<Datasheet />} />
      </Routes>
    </Router>
  );
}

export default App;
