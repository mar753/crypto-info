import { useEffect, useState } from "react";

import "./Main.css";

function Main() {
  const [coinList] = useState([
    { key: "Bitcoin", value: "90" },
    { key: "Ethereum", value: "80" },
    { key: "Dogecoin", value: "2" },
    { key: "Tether", value: "518" },
    { key: "Polkadot", value: "45219" },
  ]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [currentCoinData, setCurrentCoinData] = useState(null);

  useEffect(() => {
    if (selectedCoin === null) {
      return;
    }

    fetch(`https://api.coinlore.net/api/ticker/?id=${selectedCoin}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCurrentCoinData(result[0]);
        },
        (error) => {
          console.error(error);
        }
      );
  }, [selectedCoin]);

  return (
    <div className="main-component">
      <header>
        <p>Select crypto coin to get more info:</p>
      </header>
      <section>
        <select
          className="form-select"
          name="crypto-select"
          id="select-main"
          data-testid="select-main"
          defaultValue=""
          onChange={(event) => setSelectedCoin(event.target.value)}
        >
          <option value="" disabled>
            Select...
          </option>
          {coinList.map((element) => (
            <option key={element.value + element.key} value={element.value}>
              {element.key}
            </option>
          ))}
        </select>
      </section>
      {currentCoinData && <section className="coin-details">
        Symbol: {currentCoinData.symbol}<br />
        Market Cap: {currentCoinData.market_cap_usd} USD<br />
        Price: {currentCoinData.price_usd} USD<br />
      </section>}
    </div>
  );
}

export default Main;
