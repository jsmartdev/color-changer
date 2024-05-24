import { Header } from './components/Header';
import { ColorField } from './components/ColorField';
import './index.css';

const App = () => {

  return (
    <div>
      <Header text='Color Changer'/>
      <ColorField colorName='Empty Value'/>
    </div>
    
  )
}

export default App
