import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let cssStyle ={ };


let curDate = new Date();
curDate = curDate.getHours();

let grettings ='';

if(curDate>=1 && curDate<=12){
  grettings='Good Morning ...';
  cssStyle.color = 'green';
}else if (curDate >=12 && curDate<=19){
  grettings='Good Afternoon ...';
  cssStyle.color = 'Orange';
}else{
  grettings='Good Night ...';
  cssStyle.color = 'Black';
}


ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{grettings}</span></h1>
    </div>
  </>,
  document.getElementById('root'));