import React from "react";

const SelectedPlayerCard = ({ player, removePlayer }) => {
  //   console.log(player);
  const handleRemove = (player) => {
    removePlayer(player);
  };
  return (
    <div className=" flex justify-between  rounded-xl p-2 my-5 shadow ">
      <div className=" flex items-center gap-3">
        <img className=" h-[50px] rounded-md" src={player.image} alt="" />
        <div>
          <h2 className=" font-bold text-xl">{player.name}</h2>
          <p className=" font-thin">{player.role}</p>
        </div>
      </div>
      <div className=" flex items-center">
        <button
          onClick={() => handleRemove(player)}
          className="fa-solid fa-trash text-red-400 cursor-pointer text-xl hover:text-2xl duration-300"
        ></button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
