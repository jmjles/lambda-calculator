import React,{useState} from "react";
import {operators} from '../../../data'

const Operators = () => {
  const [ops] = useState(operators)
  return (
    <div className='opSection'>
      {
       ops.map(op =>{
         return <button key={op.char}className="operator">{op.char}</button>
       })}
    </div>
  );
};
export default Operators;