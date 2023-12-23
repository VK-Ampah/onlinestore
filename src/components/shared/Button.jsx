
const Button = ({ bgColor, color, size, icon,customFunc }) => {
  return (
    <button
      type="button"
      style= {{backgroundColor: bgColor,color: color}}
      className= {`text-${size} p-3 hover:drop-shadow-xl rounded-lg`}
      onClick={customFunc ? customFunc : () => {}}
    >
      {icon}
    </button>
  )
}

export default Button