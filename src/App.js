import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((res) => setData(res.data.meals));
  }, []);

  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setData1(res.data.meals));
  }, []);
  console.log(data);
  console.log(data1);
  return (
    <div className='container'>
      <h3>API RESULT-1</h3>
      <div className='border border-2 rounded-3 p-4 mt-2'>
        {data.map((item) => (
          <div>
            {" "}
            <li>{item.idMeal}</li>{" "}
          </div>
        ))}
        {data.map((item) => (
          <div>
            {" "}
            <li>
              {item.strMeal},{item.strTags}
            </li>{" "}
          </div>
        ))}
        {data.map((item) => (
          <div>
            {" "}
            <li>{item.strCategory}</li>{" "}
          </div>
        ))}
        {data.map((item) => (
          <div>
            {" "}
            <li>{item.strArea}</li>{" "}
          </div>
        ))}
        {data.map((item) => (
          <div>
            {" "}
            <li style={{ listStyleType: "none" }}>
              {item.strInstructions}
            </li>{" "}
          </div>
        ))}
      </div>

      <h3>API RESULT-2</h3>
      <div className='border border-2 rounded-3 p-4 mt-2'>
        {data1.map((item) => (
          <div>
            {" "}
            <li>{item.strMeal}</li>{" "}
          </div>
        ))}
        {data1.map((item) => (
          <div>
            {" "}
            <li>{item.strInstructions}</li>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default App;
