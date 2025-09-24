import React, { use } from "react";

import PlayerCard from "./PlayerCard";

const Available = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const playersData = use(playersPromise);
  // console.log(playersData);

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto pt-5">
      {/* playerCard maping */}
      {playersData.map((item, index) => {
        return (
          <PlayerCard
            key={index}
            item={item}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default Available;
