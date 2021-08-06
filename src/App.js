// import { HomeOutlined } from '@material-ui/icons';
import './App.css';
import Homepage from './Pages/Homepage'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <Router>
    <Switch>
    <Route path="/signin" component={Signin}>
    <Signin/>
    </Route>
    

    <Route path='/signup' component={Signup}>
    <Signup/>
    </Route>
    
    
    <Route path='/homepage' component={Homepage}>
    <Homepage/>
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
