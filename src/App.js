import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Posts from './Pages/Posts';
import Users from './Pages/Users';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path ="/" element={ <Home/>}/>
      <Route path ="/users" element={ <Users/>}/>
      <Route path ="/posts" element={ <Posts/>}/>
     </Routes>
        </div>
  );
}

export default App;
