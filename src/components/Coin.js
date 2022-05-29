import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log(coins);
  return (
    <div>
      <h1>The Coins {loading ? "" : coins.length}</h1>
      {loading ? <strong> now Loading...</strong> : null}
      <ul>
        {coins.map((coin, id) => (
          <li key={id}>
            {coin.name} ({coin.symbol}):${coin.quotes.USD.price}
            {" " + coin.last_updated}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coin;
