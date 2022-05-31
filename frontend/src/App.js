import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Navbar from './components/NavBar';
import ListUsers from './components/ListUsers';
import SearchBar from './components/SearchBar';
import CreateReport from './components/Report';
import ReportCard from './components/ReportCard';

function App() {
  return (
  <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/newUser' element={<CreateUser/>}/>
      <Route path='/Report-to-print' element={<CreateUser/>}/>
      <Route path='/listUsers' element={<ListUsers/>}/>
      <Route path='/Report' element={<CreateReport/>}/>
      <Route path='/ReportCard' element={<ReportCard/>}/>
      {/* <Route path='/Report/:num' element={<CreateReport/>}/> */}
      <Route path='/' element={<SearchBar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
