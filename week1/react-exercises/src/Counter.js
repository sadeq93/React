import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    let feedBack = '';
    if(count > 10 ){
        feedBack = "It's higher than 10!"
    }else{
        feedBack = "Keep counting..."
    }
function incrementHandler(){
 setCount(count+1)
}
return(
    <div>
        <h2>{count}</h2>
    <Count count={feedBack}/>
    <Button clicked = {incrementHandler}/>
    </div>
) ;


}


const Count = ({count}) => {
return(
<p>{count}</p>
);
}


const Button = ({clicked}) => {
return(
    <button onClick={clicked}>Add 1</button>
);
}


export default Counter;