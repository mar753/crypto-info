import { useState } from "react";

import "./Main.css";

function Main() {
  const [coinList] = useState([
    { key: "Bitcoin", value: "btc" },
    { key: "Ethereum", value: "eth" },
    { key: "Dogecoin", value: "doge" },
    { key: "Tether", value: "usdt" },
    { key: "Polkadot", value: "dot" },
  ]);

  return (
    <div className="main-component">
      <header>
        <p>Select crypto coin to get more info:</p>
      </header>
      <section >
        <select name="crypto-select" id="select-main" data-testid="select-main" defaultValue="">
          <option value="" disabled>Select...</option>
          {coinList.map((element) => (
            <option key={element.value + element.key} value={element.value}>
              {element.key}
            </option>
          ))}
        </select>
      </section>
    </div>
  );
}

export default Main;
