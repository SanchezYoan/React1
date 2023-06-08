import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  const [data, setData] = useState([]);
  console.log(data[4].translations.fra.common);

  const countries = data.map((country) => {
    `
    <li>${country.translations.fra.common}
    `;
  });

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul></ul>
    </div>
  );
};

export default Countries;
