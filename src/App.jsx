import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exp1 from "./courses/C/Exp1";
import PExp1 from "./courses/Python/Exp1";
import Exp2 from "./courses/C/Exp2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Exp1 />}></Route>
        <Route path="/C/E1" element={<Exp1 />}></Route>
        <Route path="/C/E2" element={<Exp2 />}></Route>
        <Route path="/Python/E1" element={<PExp1 />}></Route>
        <Route path="/Python/E1" element={<PExp1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
