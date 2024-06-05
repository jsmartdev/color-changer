export const ColorField = ({ color, textColor }) => {
  return (
    <div 
      className={`flex justify-center items-center w-80 h-80 bg-${color}-500 border-2 border-black ${textColor ? "text-black" : "text-white"}`} 
      style={{ backgroundColor: color } }>
      <h1 
        className='font-bold'
        id='fieldHeader'
      >{color}</h1>
    </div>
  )
}
