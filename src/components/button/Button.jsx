import './button.css'

export const Buttons = (props) => {
    

  return (
    
    <div>
      <button onClick={props.handleClick} value={props.tip} style={props.style} id={props.tip + '-btn'}>{props.tip}</button>
    </div>
  )
}
