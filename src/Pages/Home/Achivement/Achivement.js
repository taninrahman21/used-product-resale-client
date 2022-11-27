import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Achivement = () => {
  const [showCounter, setShowCounter] = useState(false);
  return (
   <ScrollTrigger onEnter={() => setShowCounter(true)} onExit={() => setShowCounter(false)}>
     <div className="bg-[#fd8f5f] text-center py-24">
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Our Achivement</h1>
          <p className="text-sm font-semibold text-gray-700">
            After a year we achived a lot.We will try to hold on this success for alltime.
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <h2 className="text-2xl font-bold">
            {
              showCounter && <CountUp start={0} end={2000} duration={3} delay={0}/>
            }
            +</h2>
          <p className="text-base font-semibold text-gray-700">Users</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            {
              showCounter && <CountUp start={0} end={500} duration={3} delay={0}/>
            }
            +</h2>
          <p className="text-base font-semibold text-gray-700">Sellers</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            {
              showCounter && <CountUp start={0} end={300} duration={3} delay={0}/>
            }
            +</h2>
          <p className="text-base font-semibold text-gray-700">
            Products sell per day
          </p>
        </div>
      </div>
    </div>
   </ScrollTrigger>
  );
};

export default Achivement;
