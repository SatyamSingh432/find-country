import React from "react";
import { useState, useEffect } from "react";
import FlagCard from "./FlagCard";
import "./CardPage.css";
const CardPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiData = async () => {
      try {
        const apiUrl = "https://xcountries-backend.azurewebsites.net/all";
        const respone = await fetch(apiUrl);
        if (!respone.ok) {
          throw new Error("data not found");
        } else {
          const data = await respone.json();
          setData(data);
        }
      } catch (error) {
        console.error(`Error fetching data :${error.message}`);
      }
    };
    apiData();
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
