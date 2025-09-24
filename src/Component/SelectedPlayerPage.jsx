import React from "react";
import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayerPage = ({ selectedPlayers, removePlayer, settoggle }) => {
  return (
    <div className=" container mx-auto ">
      {selectedPlayers.map((player, index) => {
        return (
          <SelectedPlayerCard
            key={index}
            player={player}
            removePlayer={removePlayer}
          ></SelectedPlayerCard>
        );
      })}

      <div className=" flex items-center md:float-left justify-center ">
        <button
          onClick={() => settoggle(true)}
          className=" bg-lime-200 p-2 rounded-xl cursor-pointer"
        >
          Add more player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerPage;
