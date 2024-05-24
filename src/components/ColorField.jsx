export const ColorField = ({ color, textColor }) => {
  return (
    <div 
      className={`flex justify-center items-center w-80 h-80 bg-${color}-500 border-2 border-black ${textColor ? "text-white" : "text-black"}`} 
      style={{ backgroundColor: color } }>
      <h1 className='font-bold'>{color}</h1>
    </div>
  )
}
