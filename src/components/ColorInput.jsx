export const ColorInput = ({setInput, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label className='absolute left-full' htmlFor='colorInput'>Input Color</label>
      <input 
        autoFocus
        id='colorInput'
        className='w-80 p-2 m-1'
        type='text'
        placeholder='enter a color'
        onChange={(e) => setInput(e.target.value)}
        required
      ></input>
    </form>
  )
}
