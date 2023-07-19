import { useEffect, useState } from "react";
import Example from "../utils/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };

  if (resInfo === null) return <Example />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name}----{item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
