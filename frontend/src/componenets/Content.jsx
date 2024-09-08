import React from "react";
import Card from "./Card";
import Sort from "./Sort";
import SeatChart from "./SeatChart";

const Content = ({
  occasions,
  tokenMaster,
  provider,
  account,
  toggle,
  setToggle,
  setOccasion,
}) => {
  return (
    <div className="content">
      <Sort />

      <div className="cards">
        {occasions.map((occasion, index) => (
          <Card
            occasion={occasion}
            id={index + 1}
            tokenMaster={tokenMaster}
            provider={provider}
            account={account}
            toggle={toggle}
            setToggle={setToggle}
            setOccasion={setOccasion}
            key={index}
          />
        ))}
      </div>

      {toggle && (
        <SeatChart
          occasion={occasions}
          tokenMaster={tokenMaster}
          provider={provider}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default Content;
