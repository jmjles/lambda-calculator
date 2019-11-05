import React,{useState} from "react";
import {numbers} from '../../../data'

const Numbers = () => {

  const [numb] = useState(numbers) 

  return (
    <div className="numberSection">
      {
       numb.map(number=>{
         return <button key={number} className='number'>{number}</button>
       })
       }
    </div>
  );
};
export default Numbers;
