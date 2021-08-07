import './App.css';
import Homepage from './Pages/Homepage'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
function App() {

const [screenX, setScreenX] = useState()
const [screenY, setScreenY] = useState()

window.addEventListener('resize', ()=>{
setScreenX(window.innerWidth)
setScreenY(window.innerHeight)
})


  return (
    <div className="container">

    {(screenY<=550 || screenX<=1024)? <div style={{background:'white', height:'100vh', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}} screenre><h1>Sorry, This website is optimised only for dektops/laptops. Plaese use another device :(</h1></div>:
    <Router>
    
    <Switch>
    
    

    <Route path='/signup' component={Signup}>
    
    </Route>

    <Route path='/homepage' component={Homepage}>
    
    </Route>
    
    <Route path="/" component={Signin}>
  
    </Route>
    
    </Switch>
    </Router>
    }
    
    </div>
    );
  }

export default App;
