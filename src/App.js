import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';
import StandardCalc from  './calc-repo/StandardCalc';
import BMI from './calc-repo/BMI';
import Temperature from './calc-repo/Temperature';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen font-roboto'>
      <Routes>
        <Route path='/' element={ <Home /> } />  
        <Route path='/about' element={ <About /> } />  
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/calc-repo/standard-calc' element={ <StandardCalc /> } />
        <Route path='/calc-repo/bmi' element={ <BMI /> } />
        <Route path='/calc-repo/temperature' element={ <Temperature /> } />
        <Route path='*' element={ <NotFound /> } /> 
      </Routes>
    </div>
  );
}

export default App;
