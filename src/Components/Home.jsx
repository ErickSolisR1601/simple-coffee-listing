import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../Styles/Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  /**
   * Calling API and filtering unique data
   */
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((coffeeData) => {
        const uniqueData = coffeeData.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );
        setData(uniqueData);
        setFilteredData(uniqueData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  /**
   * Function to manage filter change
   *
   * @param {*} filter
   */
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "available") {
      setFilteredData(data.filter((item) => item.available));
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="home">
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="buttons">
        <button
          className={`button ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All Products
        </button>
        <button
          className={`button ${activeFilter === "available" ? "active" : ""}`}
          onClick={() => handleFilterChange("available")}
        >
          Available Now
        </button>
      </div>

      <div className="products">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
            votes={item.votes}
            available={item.available}
            popular={item.popular}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
