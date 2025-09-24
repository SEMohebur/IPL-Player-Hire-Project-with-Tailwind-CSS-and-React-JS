import React, { Suspense, useState } from "react";
import Available from "./Component/Available";

import Navbar from "./Component/Navbar";
import SelectedPlayerPage from "./Component/SelectedPlayerPage";
import { ToastContainer } from "react-toastify";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();
const App = () => {
  const [availableBalance, setAvailableBalance] = useState(100000000);
  const [toggle, settoggle] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const removePlayer = (player) => {
    const filterData = selectedPlayers.filter((p) => p.id !== player.id);
    setSelectedPlayers(filterData);
    setAvailableBalance(
      availableBalance +
        parseInt(player.price.split("৳").join("").split(",").join(""))
    );
  };

  // console.log(selectedPlayers);
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <Banner></Banner>

      <div className=" flex flex-col md:flex-row items-center justify-between container mx-auto py-4">
        <div className=" font-bold text-xl">
          {toggle ? (
            <h1>Available Players</h1>
          ) : (
            <h1>Selected Players({selectedPlayers.length}/6)</h1>
          )}
        </div>
        <div className="  ">
          <button
            onClick={() => settoggle(true)}
            className={`${
              toggle && `bg-lime-200`
            }  p-2 px-5 rounded-s-xl text-sm cursor-pointer border border-gray-200`}
          >
            Available
          </button>
          <button
            onClick={() => settoggle(false)}
            className={`${
              toggle === false ? "bg-lime-200" : ""
            } text-sm p-2  cursor-pointer border border-gray-200 rounded-e-xl`}
          >
            Selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<p>Loading...</p>}>
          <Available
            playersPromise={playersPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></Available>
        </Suspense>
      ) : (
        <SelectedPlayerPage
          selectedPlayers={selectedPlayers}
          removePlayer={removePlayer}
          settoggle={settoggle}
        ></SelectedPlayerPage>
      )}
      <ToastContainer />
      <Footer></Footer>
    </>
  );
};

export default App;
