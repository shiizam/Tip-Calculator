import React, { useState, useEffect } from "react";
import { MainCard } from "./components/cards/MainCard";

import './index.css';


function App() {

  const [bill, setBillTotal] = useState(null);
  const [tip, setTip] = useState(null);
  const [perPerson, setPerPerson] = useState(null);
  const [totalTip, setTipAmount] = useState(null);
  const [total, setTotal] = useState(null);
  const [enable, setEnable] = useState(false)

  const [style, setStyle] = useState('');


  useEffect(() => {
    if (bill > 0 && tip > 0 && perPerson > 0) {
      setEnable(true)
      setTipAmount(parseFloat(bill * (tip / 100) / perPerson).toFixed(2));
      setTotal(parseFloat((totalTip * perPerson + bill) / perPerson).toFixed(2));
    }

  }, [bill, tip, perPerson, totalTip, total, enable]);


  return (
    <main className="App">
      <form>
        <MainCard 
        enable={enable} 
        setEnable={setEnable} 
        bill={bill} 
        tip={tip} 
        perPerson={perPerson} 
        setBillTotal={setBillTotal} 
        setTip={setTip} 
        setPerPerson={setPerPerson} 
        totalTip={totalTip} 
        total={total} 
        style={style} 
        setStyle={setStyle} 
        setTipAmount={setTipAmount} 
        setTotal={setTotal} 
        />

      </form>
    </main>

  )
}

export default App
