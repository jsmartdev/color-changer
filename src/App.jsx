import { useState } from 'react';
import { Header } from './components/Header';
import { ColorField } from './components/ColorField';
import { ColorInput } from './components/ColorInput';
import { TextColorButton } from './components/TextColorButton';
import './index.css';


const App = () => {

  const [ color, setColor ] = useState('Empty Value');
  const [input, setInput ] = useState('');
  const [ textColor, setTextColor ] = useState(true);

  const namedColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
    "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
    "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick",
    "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green",
    "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
    "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen",
    "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime",
    "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose",
    "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod",
    "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver",
    "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

  const handleSubmit = (e) => {
    e.preventDefault();
    colorChange(input);
    console.log(textColor);
  }

  const toLowercase = (colors) => {
    return colors.map(color => color.toLowerCase());
  }

  const lowercaseString = (text) => {
    return text.toLowerCase();
  }

  const lowercaseColors = toLowercase(namedColors);
  const lowercaseInput = lowercaseString(input);

  const colorChange = () => {
    for (let x = 0; x < lowercaseColors.length; x++) {
      if (lowercaseColors[x] === lowercaseInput ) {
        setColor(namedColors[x]);
      }
    }
  }

  

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <Header text='Color Changer'/>
      <ColorField  color={color}/>
      <ColorInput setInput={setInput} handleSubmit={handleSubmit}/>
      <TextColorButton textColor={textColor} setTextColor={setTextColor} />
    </div>
    
  )
}

export default App
