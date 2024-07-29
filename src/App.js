import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Landing from './Pages/Landing';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Tracka from './Pages/Tracka';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp /> } />
          <Route exact path="/login" element={ <Login />} />
          <Route exact path="/tracker" element={<Tracka />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
