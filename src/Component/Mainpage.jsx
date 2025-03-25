import React, { useState } from "react";
import MealCards from "./MealCards";

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const myfun = async () => {
    if (search === "") {
      setMsg("Please Enter Something");
      setData([]); 
    } else {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const jsonData = await response.json();

        if (jsonData.meals) {
          setData(jsonData.meals);
          setMsg("");
        } else {
          setData([]);
          setMsg("No results found"); 
        }
      } catch (error) {
        setMsg("Error fetching data. Try again!"); 
            }
    }
  };

  return (
    <>
      <h1 className="head">Food Recipe App</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Please Enter Dish"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={myfun}>Search</button>
        </div>
        <h4 className="error">{msg}</h4>
        <div>
          <MealCards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
