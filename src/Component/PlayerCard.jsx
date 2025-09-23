import React, { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({
  item,
  setAvailableBalance,
  availableBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButton = (item) => {
    const playerPrice = parseInt(
      item.price.split("৳").join("").split(",").join("")
    );
    if (selectedPlayers.length + 1 <= 6) {
      if (playerPrice < availableBalance) {
        setIsSelected(!isSelected);
        setAvailableBalance(availableBalance - playerPrice);
        setSelectedPlayers([...selectedPlayers, item]);
      } else {
        toast("You don't have enough balance");
      }
    } else {
      toast("6 Player allready selected");
    }
  };

  return (
    <div className="card bg-base-100  shadow-sm p-2">
      <figure>
        <img
          className=" rounded-lg  w-full max-h-[250px]"
          src={item.image}
          alt="Shoes"
        />
      </figure>
      <div className=" pt-3 space-y-2">
        <div className=" flex items-center text-gray-700 ">
          <i className="fa-solid fa-user font-bold text-xl"></i>
          <p className=" font-bold text-xl">{item.name}</p>
        </div>

        <div className=" flex justify-between items-center text-gray-500">
          <div className=" flex items-center gap-3">
            <i className="fa-solid fa-flag text-xl "></i>
            <p>{item.country}</p>
          </div>
          <div>
            <span className=" bg-gray-200 p-2 rounded-md">{item.role}</span>
          </div>
        </div>

        <hr className=" text-gray-300 " />

        <div className=" flex items-center justify-between">
          <p className=" font-bold text-gray-700 ">Rating</p>{" "}
          <p className=" font-bold text-gray-700 ">{item.rating}</p>
        </div>

        <div className=" flex justify-between items-center text-gray-700">
          <div className=" font-semibold">Left-hand-bat</div>
          <div className=" font-thin">{item.battingStyle}</div>
        </div>

        <div className=" flex justify-between items-center">
          <div>
            Price:<span>{item.price}</span>
          </div>

          <button
            disabled={isSelected}
            onClick={() => {
              handleButton(item);
            }}
            className=" border border-gray-300 p-1 rounded-md font-thin cursor-pointer hover:bg-gray-200 duration-300"
          >
            {isSelected ? "selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
