//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Help from './Help';
const Host = ()=><h1>Become a host</h1>
const Login = ()=><h1>Login</h1>
const Signup = ()=><h1>SignUp</h1>
function App() {
  return (
    <Router>
     <Route path='/' component={NavBar}/>
     <Route exact path="/" render={(props)=>{
          return <Home title="Hello" history = {props.history} match={props.match} />
        }} />
     <Route exact path="/Host" component={Host}/>
     <Route path="/Help" component={Help}/>
     <Route exact path="/Login" component={Login}/>
     <Route exact path="/Signup" component={Signup}/>
    </Router>
  );
}

export default App;
