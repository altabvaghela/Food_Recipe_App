// import React, { useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";

// const MealInfo = () => {
//   const { mealid } = useParams();
//   const [info, setInfo] = useState(null);
//   console.log(mealid);
//   const getInfo = async () => {
//     const get = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
//     );
//     const jsonData = await get.json();
//     console.log(jsonData.meals[0]);
//     setInfo(jsonData.meals[0]);
//   };
//   catch(error){
//     console.log(error);

//   }
//   if (info != "") {
//     getInfo();
//   }

//   return (
//     <>
//       {!info ? (
//         "Data Not Found"
//       ) : (
//         <div className="mealInfo">
//           <img src={info.strMealThumb} alt="" />
//           <div className="info">
//             <h1>Recpie Details</h1>
//             <button>{info.strMeal}</button>
//             <h3>Intruction's</h3>
//             <p>{info.strInstructions}</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MealInfo;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const getInfo = async () => {
      try {
        const get = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getInfo();
  }, [mealid]);

  return (
    <>
      <h1 className="head">Food Recipe APp</h1>
      {!info ? (
        <h2>Loading...</h2>
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className="info">
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>
              {info.strInstructions?.split(" ").slice(0, 40).join(" ") + "..."}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MealInfo;
