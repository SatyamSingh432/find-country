import React from "react";
import { useState, useEffect } from "react";
import FlagCard from "./FlagCard";
import "./CardPage.css";
const CardPage = () => {
  const apiUrl = "https://xcountries-backend.azurewebsites.net/all";
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[1].name);
        setData(data);
      })
      .catch((error) => console.error(`Error fetching data:${error.message}`));
  }, []);
  const handler = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="input-box-container">
        <input
          type="text"
          onChange={handler}
          className="input-box"
          placeholder="Enter Country Name"
        />
      </div>
      <div className="countryCard">
        {data
          .filter((ele) =>
            ele.name.toLowerCase().startsWith(name.toLowerCase())
          )
          .map((ele) => {
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
    </>
  );
};
export default CardPage;
