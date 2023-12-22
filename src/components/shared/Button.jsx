
const Button = ({ bgColor, color, size, icon, borderRadius,customFunc }) => {
  return (
    <button
      type="button"
      style= {{backgroundColor: bgColor,color,borderRadius}}
      className= {`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={customFunc ? customFunc : () => {}}
    >
      {icon}
    </button>
  )
}

export default Button