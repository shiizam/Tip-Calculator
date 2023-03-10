import './main-card.css';

import {Buttons} from '../button/Button'
import { OutputCard } from './OutputCard'

import logo from '../../assets/logo.svg'


export const MainCard = ({setTotal, setTipAmount, enable, setEnable, setBillTotal, setTip, perPerson, setPerPerson, total, totalTip, style, setStyle}) => {

  // Button Array && Active Button Style 
  const tips = ['5%','10%','15%','25%','50%'];


  const handleClick = (e) =>{
    e.preventDefault();
    setStyle(e.target.innerText);
    setTip(parseInt(e.target.value));
  }

// Error Handling and Error Styling
  const handleErrorStyle = (message = "Error", type = "add") => {
		document.querySelector(`#error`).innerHTML = message;
		document.querySelector(`#num-people-inp`).nextElementSibling.classList[type === "add" ? "remove" : "add"]("info--hidden");
		document.querySelector(`[name="numberOfPeople"]`).classList[type](`input--error`);
  }

  const handleCheckError = (e) => {
    if (e.target.value <= 0 || perPerson === null || isNaN(perPerson)) {
      handleErrorStyle("Can't be blank");
    } else {
      handleErrorStyle("", "remove")
    }
  }

  return (
    <div>
      <div className="title-container">
        <img className='title' src={logo} alt="logo" />
      </div>
      <div className='main-container'>
        <div className="inp-group">
          <label htmlFor="bill-inp">Bill</label>
          <input className='inp-style' id='bill-inp' type="number" placeholder='0' name='bill' onChange={(e) => setBillTotal(parseFloat(e.target.value))}/>
        </div>

        <div className="btn-grid">
        <label id='btn-label'>Select Tip %</label>
              {
            tips.map((tip,index) => {
            const active = style === tip ? {background: 'hsl(172, 67%, 45%)', color: 'hsl(183, 100%, 15%)'} : null;               
            return (
                <Buttons
                  key={index} 
                  id={index}
                  tip={tip} 
                  handleClick={handleClick}
                  style={active}
                  value={tip}
                /> 
              )
            })
          }
          <input className='custom-input' type="number" placeholder='Custom' name='customTip' onChange={(e) => setTip(parseFloat(e.target.value))} onClick={handleClick}/>
        </div>

        <div className="inp-group" id='people-group'>
          <label htmlFor="num-people-inp">Number of People</label>
          <input className='inp-style' id='num-people-inp' type="number" placeholder='0' name='numberOfPeople' onBlur={handleCheckError} onChange={(e) => setPerPerson(parseFloat(e.target.value))} />
          <p id='error' className='info info--hidden' aria-live="polite"></p>
        </div>
        <OutputCard
          setBillTotal={setBillTotal}
          setTip={setTip}
          setPerPerson={setPerPerson}
          setStyle={setStyle}
          totalTip={totalTip}
          total={total}
          enable={enable}
          setEnable={setEnable}
          setTipAmount={setTipAmount} 
          setTotal={setTotal}
        />
      </div>
    </div>
  )
}
