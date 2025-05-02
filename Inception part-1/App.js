/**
 * 
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>i' am h1 tag<h1>
 *      </div>
 * </div>
 * 
 */
//ith poley enghaneya undakuka

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//        [ React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
//     )
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)  


// const heading = React.createElement("h1",{id:"heading",xyz:"abcd"},"Hello World react inside");
//   createElement 3 araments aan 1- what tag 2-object is atributes kodukkan in our class namuk ethra atributes veneylum kodukkam eg ippo color change ee name,3- what you inside puting h1 tag enthano namal kodukkunnath ath eg oru tagntey ullil kodukkunnath   props {id:"heading",xyz:"abcd"},"Hello World react inside");ithan ithi ulla props 3-"Hello World react inside" this is children which going h1 tag 2- attribute 
//    ini ith kananamenkil rootil aakanam nammal rootinod parayanam    react eppoyum root venam where react do all root dom manipulation  createElement verunnath react ninn aan root create aakunnath domil ninn aan 


 // const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)  
// roo.render whats passing in render we are passing react element render(heading) heading is react element


 //inghaney siblings aanankil arrayil kodukuka
    


        /**
        * 
        * 
        * <div id="parent">
        *      <div id="child">
        *          <h1>i' am h1 tag<h1>
        *          <h2>i' am h1 tag<h2>
        *      </div>
        * </div>
        * 
        */
        //ith poley enghaneya undakuka

        // const parent = React.createElement(
        //     "div",
        //     {id:"parent"},
        //     React.createElement(
        //         "div",
        //         {id:"child"},
        //         [ React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
        //     )
        // );

        // //inghaney siblings aanankil arrayil kodukuka

        // const root = ReactDOM.createRoot(document.getElementById("root"));

        // root.render(parent)  





        //inghaney siblings aanankil arrayil kodukuka
    


        /**
        * 
        * 
        * <div id="parent">
        *      <div id="child1">
        *          <h1>i' am h1 tag<h1>
        *          <h2>i' am h1 tag<h2>
        *      </div>
        *      <div id="child2">
        *          <h1>i' am h1 tag<h1>
        *          <h2>i' am h1 tag<h2>
        *      </div>
        * </div>
        * 
        */
        //ith poley enghaneya undakuka

        const parent = React.createElement(
            "div",
            {id:"parent"},
            [
            React.createElement("div",{id:"child1"},[ 
                React.createElement("h1",{},"i am h1 tag"),
                React.createElement("h2",{},"i am h2 tag")
            ]),
            React.createElement("div",{id:"child2"},[ 
                React.createElement("h1",{},"i am h1 tag"),
                React.createElement("h2",{},"i am h2 tag")
            ])
        ]);

        //inghaney siblings aanankil arrayil kodukuka

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent)  