export const TextColorButton = ({textColor, setTextColor}) => {
  return (
    <button 
      className='p-1 border-1 border-black'
      onClick={() => setTextColor(!textColor)}
    >
      Toggle Text Color
    </button>
  )
}
