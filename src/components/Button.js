
const Button = ({onAdd, text}) => {
  return (
    <button className = "btn"          
    onClick={onAdd}    
    >{text}</button>
  )
}


export default Button