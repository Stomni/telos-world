import "./recap.css";

import { recapData } from "../../assets/recapData";
import { useState } from "react";

export function Recap() {
  const listLength: number = recapData.length - 1;
  const [recapIndex, setRecapIndex] = useState(listLength);
  let index: number = recapIndex;
  return (
    <div className="recap-container">
      <h5>Campaign Recap</h5>
      <h6>{recapData[recapIndex].title}</h6>
      <div className="recap-content">
        <p>{recapData[recapIndex].recap}</p>
      </div>
      <div className="recap-actions">
        <button
          onClick={() => {
            if (recapIndex !== listLength) {
              index++;
              setRecapIndex(index);
            }
          }}
          style={
            recapIndex === listLength
              ? { opacity: "0", cursor: "default" }
              : { opacity: "1", cursor: "pointer" }
          }
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (recapIndex !== 0) {
              index--;
              setRecapIndex(index);
            }
          }}
          style={
            recapIndex === 0
              ? { opacity: "0", cursor: "default" }
              : { opacity: "1", cursor: "pointer" }
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
