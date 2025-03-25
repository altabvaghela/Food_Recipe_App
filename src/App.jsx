import React from "react";
import Mainpage from "./Component/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealInfo from "./Component/MealInfo";
const App = () => {
  return (
    <>
      {/* <Mainpage/> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:mealid" element={<MealInfo />} />
      </Routes>
    </>
  );
};

export default App;
