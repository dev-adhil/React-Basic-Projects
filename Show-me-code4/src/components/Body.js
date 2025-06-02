import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [listOfResturent, setListOfResturent] = useState([])
    const [filteredResturent, setFilteredResturent] = useState([])


    const [searchText, setSearchText] = useState("")


useEffect(()=>{
  fetchData()
},[])

const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json()

  console.log(json)
  setListOfResturent(json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredResturent(json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

// if(listOfResturent.length == 0) {
//   return <Shimmer/>
// } now this not need bottom ternery operation used using this function this both same there ternery operation used


console.log("body render ")
  return listOfResturent.length == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"   className="search-box" value={searchText}  onChange={e => setSearchText(e.target.value)}/>
          <button 
            onClick={()=>{
              // Filter the restaurent card and update the UI 
              //Search Text
              console.log(searchText)

            const filteredResturent =  listOfResturent.filter((res) =>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

              
              setFilteredResturent(filteredResturent);

            }}>Search

          </button>
        </div>
        <button className="filter-btn" onClick={()=>{
            //Filter logic here
              const  filterdList = listOfResturent.filter((res)=>res.info.avgRating>4);
                console.log(listOfResturent)
                console.log("button clicked")
                setListOfResturent(filterdList)
            }}>
                Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filteredResturent.map((restaurent) => (
          // <RestaurentCard key={restaurent.info.id} resData={restaurent} />
            <Link key={restaurent.info.id} to={"/restaurent/"+restaurent.info.id}><RestaurentCard  resData={restaurent} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;