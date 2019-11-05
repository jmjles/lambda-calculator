import React,{useState} from "react";
import {specials} from '../../../data';

const Specials = () => {
  const [specialBtns] = useState(specials)
  return (
    <div className='specialSection'>
      {
        specialBtns.map(item =>{
         return <button key={item} className="specialOp">{item}</button>
       })
       }
    </div>
  );
};
export default Specials;
