import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        console.log(props)

        this.state = {
            count : 0
        };
    }

    render(){
            const {name, location} = this.props
            const {count} = this.state
        return(
            <div className="user-card">
                <h2>Count: {count}</h2>
                <button onClick={()=>
                    //NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count:this.state.count +1
                    })
                }
                >
                    Count increase
                </button>
                <h2>Name: Adhil</h2>
                <h3>Location: Kerala</h3>
                <h4>Contact: @adirkm</h4>
            </div>
        )
    }
}

export default UserClass;