import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import PlayerList from "./components/PlayerList/PlayerList";
import Newsletter from "./components/Newsletter/Newsletter"; // Import Newsletter
import Footer from "./components/Footer/Footer"; // Import Footer

function App() {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const addCoinListener = (event) => {
      setCoins((prevCoins) => prevCoins + event.detail.amount);
    };

    window.addEventListener("addCoins", addCoinListener);

    return () => {
      window.removeEventListener("addCoins", addCoinListener);
    };
  }, []);

  const handlePurchase = (playerPrice) => {
    if (coins >= playerPrice) {
      setCoins(coins - playerPrice);
      return true;
    }
    return false;
  };

  return (
    <>
      <Header coins={coins} />
      <Banner />
      <PlayerList coins={coins} onPurchase={handlePurchase} />
      <Newsletter /> {/* Add Newsletter component */}
      <Footer /> {/* Add Footer component */}
    </>
  );
}

export default App;
