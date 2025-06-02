import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import { MENU_API } from "../utils/constants";

const ResturentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams()

  useEffect(() => {
    fetchMenu();
    
  }, []);

  const fetchMenu = async (req, res) => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if(resInfo === null) return <Shimmer />


  const { name, cuisines, costForTwoMessage } = 
    resInfo?.cards?.[2]?.card?.card?.info ?? 0;


  const {itemCards} = 
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card;

  console.log(itemCards,"----")


  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>

        <h2>Menu</h2>
      <ul>
        {itemCards?.map((item)=><li key={item.card.info.id}>{item.card.info.name} -  {"RS"}  - {item.card.info.price/100} </li>)}
      </ul>
    </div>
  ); 
};

export default ResturentMenu;
