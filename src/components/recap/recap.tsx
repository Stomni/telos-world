import "./recap.css";

import { recapData } from "../../data/recapData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Recap() {
  const listLength: number = recapData.length - 1;
  const [recapIndex, setRecapIndex] = useState(listLength);
  const [direction, setDirection] = useState(0);
  let index: number = recapIndex;

  const variants = {
    enter: (direction: number) => {
      return {
        display: "visible",
        opacity: 0,
        x: direction < 0 ? 1000 : -1000,
      };
    },
    center: {
      zIndex: 1,
      opacity: 1,
      display: "visible",
      x: 0,
    },
    exit: (direction: number) => {
      return {
        display: "none",
        zIndex: 0,
        opacity: 0,
        x: direction > 0 ? 1000 : -1000,
      };
    },
  };

  function paginate(newDirection: number) {
    setDirection(newDirection);
  }

  function prev() {
    if (recapIndex !== listLength) {
      index++;
      setRecapIndex(index);
      paginate(1);
    }
  }

  function next() {
    if (recapIndex !== 0) {
      index--;
      setRecapIndex(index);
      paginate(-1);
    }
  }

  function toStart() {
    if (recapIndex !== 0) {
      index = 0;
      setRecapIndex(index);
      paginate(index);
    }
  }

  function toLatest() {
    if (recapIndex !== listLength) {
      index = listLength;
      setRecapIndex(index);
      paginate(index);
    }
  }

  return (
    <div className="recap-container">
      <h5>Campaign Recap</h5>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="recap-content"
          layout="position"
          key={recapIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.3 },
          }}
        >
          <motion.h6 layout="position">{recapData[recapIndex].title}</motion.h6>
          <motion.p layout="position">{recapData[recapIndex].recap}</motion.p>
        </motion.div>
      </AnimatePresence>
      <div className="recap-actions">
        <button
          onClick={() => prev()}
          style={
            recapIndex === listLength
              ? { opacity: "0", cursor: "default" }
              : { opacity: "1", cursor: "pointer" }
          }
        >
          Previous
        </button>
        <button
          onClick={toLatest}
          style={
            recapIndex === 0
              ? { opacity: "0", cursor: "default" }
              : { opacity: "1", cursor: "pointer" }
          }
        >
          Latest Ep.
        </button>
        <button
          onClick={toStart}
          style={
            recapIndex === 0
              ? { opacity: "0", cursor: "default" }
              : { opacity: "1", cursor: "pointer" }
          }
        >
          First Ep.
        </button>
        <button
          onClick={() => next()}
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
