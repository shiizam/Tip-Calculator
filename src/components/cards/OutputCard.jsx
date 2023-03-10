import './output-card.css'

export const OutputCard = ({setTipAmount, setTotal, enable, setBillTotal, setTip, setPerPerson, setStyle, totalTip, total}) => {

    const handleClear = () => {
      setTipAmount(null)
      setTotal(null)
      setBillTotal(null)
      setTip(null)
      setPerPerson(null)
      setStyle(null)
    }

  return (
    <div className='output-container'>
      <div className="tip-header">
        <h2>Tip Amount</h2>
        <p id='tip-person'>/ person</p>
      </div>
      {totalTip === null
      ? <span>$0.00</span>
      : <span>${totalTip}</span>
      }
      <div className="total-header">
        <h2>Total</h2>
        <p id='total-person'>/ person</p>
      </div>
      {total === null
      ? <span>$0.00</span>
      : <span>${total}</span>
      }
      {enable
        ? <button className='reset' id='reset-btn' onClick={handleClear}>reset</button>
        : <button className='reset' id='disabled-reset-btn' disabled>reset</button>
      }
    </div>
  )
}
