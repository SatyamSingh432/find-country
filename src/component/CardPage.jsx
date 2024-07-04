import React from "react";
import { useState, useEffect } from "react";
import FlagCard from "./FlagCard";
import "./CardPage.css";
const CardPage = () => {
  const apiUrl = "https://xcountries-backend.azurewebsites.net/all";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(`Error fetching data :${error.message}`));
  }, []);
  return (
    <div className="cardPage">
      {data.map((ele) => {
        return (
          <FlagCard
            key={`${ele.name}${Math.floor(Math.random() * 90) + 10}`}
            flag={ele.flag}
            name={ele.name}
            alth={ele.alth}
          />
        );
      })}
    </div>
  );
};
export default CardPage;
