import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import sData from './sData';

//console.log(sData[0]);


const App =()=>(
   <>
        <h1 className="heading_style">List Of top 5 Netflix Series in 2021</h1>
        {sData.map((val,index)=> {
        console.log(val);
        return(
                <Card
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname} 
                        link={val.link}

                />

        );

})}
   </>
);

export default App;