import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/newUser' element={<CreateUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
