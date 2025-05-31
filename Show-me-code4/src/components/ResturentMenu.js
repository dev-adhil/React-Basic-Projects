import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturentMenu = ()=>{
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async (req,res)=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9890092&lng=76.284491&restaurantId=53243&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
        )

        const json = await data.json()
        console.log(json)
        setResInfo(json.data)
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    console.log(name ,cuisines,costForTwoMessage,"ffffffffffffffffff")
    
    

                // <h1>{resInfo?.cards?.[2]?.card?.card?.info.name}</h1>


    // if(resInfo === null) return <Shimmer/> 

    return resInfo === null ? ( <Shimmer/> ) :(
        <div>
            <h1>{resInfo?.cards?.[2]?.card?.card?.info.name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            
            <ul>

            </ul> 
        </div>
    );
};

export default ResturentMenu;