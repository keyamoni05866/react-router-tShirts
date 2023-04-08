import React, { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export  const RingContext = createContext("gold");
const Grandpa = () => {
  const ring = "diamond";
 
  return (
    <div className="grandpa">
      <h2>this is grandpa</h2>
      <RingContext.Provider value="golden-ring">
        <section className="flex">
          <Father ring={ring}></Father>

          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </RingContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * Context api
 * 1.create a context
 * 2. create a provider and pass a value
 * 3. use useContext to receive 
 *
 */
