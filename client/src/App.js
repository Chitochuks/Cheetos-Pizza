import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import { BrowserRouter , Routes , Route , Link , Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='/cart' element={<Cartscreen/>}/>
        <Route path='/register' element={<Registerscreen/>}/>
        <Route path='/login' element={<Loginscreen/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
