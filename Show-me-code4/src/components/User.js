import { useState } from "react";

export const User = ({name})=>{

    const [count1] = useState
    const [count2] = useState

    return(
        <div className="user-card">
            <h2>Count: {count1}</h2>
            <h2>Count: {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: Kerala</h3>
            <h4>Contact: @adirkm</h4>        
        </div>
    );
};