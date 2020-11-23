import React, { useState } from "react";
import './App.css';

const App = () => {
  const CURRENCY_CHANGER = {
    bath: null,
    dollar: null,
    eur: null,
    jpy: null,
  };

  const [currency, setCurrency] = useState(CURRENCY_CHANGER);
  const onInput = (field) => (event) => {
    setCurrency({
      ...currency,
      [field]: event.target.value

    })
  }
  const onClickCurrency = (event) => {
    const sum = currency.bath / 30;
    setCurrency({
      ...currency,
      dollar: sum
    })
  };
  const onClickCurrencyeur = (event) => {
    const sumeur = currency.bath / 20;
    setCurrency({
      ...currency,
      eur: sumeur
    })
  };
  const onClickCurrencyjpy = (event) => {
    const sumjpy = currency.bath / 10;
    setCurrency({
      ...currency,
      jpy: sumjpy
    })
  };
  return (
    <>
      <div>
        <label>เงินบาท</label>
        <input type="number" value={currency.bath} onChange={onInput("bath")} />
      </div>
      <div>
        <label>เงินดอลล่า</label>
        <input type="number" value={currency.dollar} readOnly />
        <button type="button" onClick={onClickCurrency}>
          แปลงค่า
        </button>
      </div>
      <div>
        <label>เงินยูโร</label>
        <input type="number" value={currency.eur} readOnly />
        <button type="button" onClick={onClickCurrencyeur}>
          แปลงค่า
        </button>
      </div>
      <div>
        <label>เงินเยน</label>
        <input type="number" value={currency.jpy} readOnly />
        <button type="button" onClick={onClickCurrencyjpy}>
          แปลงค่า
        </button>
      </div>

    </>
  );
};

export default App;
