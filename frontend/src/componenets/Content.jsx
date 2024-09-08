import React from "react";
import Card from "./Card";

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
    </div>
  );
};

export default Content;
