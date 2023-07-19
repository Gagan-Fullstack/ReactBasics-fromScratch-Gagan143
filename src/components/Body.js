import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Example from "../utils/Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9600251&lng=77.7155112&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //optional chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listofRestaurants.length === 0 ? (
    <Example />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurant..."
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn-style"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            SEARCH
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          TOP RATED Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.data.id}>
            <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
