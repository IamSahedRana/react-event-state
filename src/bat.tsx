import { useState } from "react";

export default function Bat(){
     const [score, setScore] = useState(0);

     const incrementScore = () => {
          setScore(score + 1);
     };

     const addfour = () => {
          setScore(score + 4);
     }

     const addsix = () => {
          setScore(score + 6);
     }
     return (
          <div>
               <h2> Score: {score}</h2>
               <button onClick={incrementScore}>Increment</button>
               <button onClick={addfour}>Add 4</button>
               <button onClick={addsix}>Add 6</button>
               <button onClick={() => setScore(0)}>Reset</button>
               <p>---------------------------------------</p>
          </div>
     )
}