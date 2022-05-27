import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Navbar from './components/NavBar';

function App() {
  return (
  <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/newUser' element={<CreateUser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
