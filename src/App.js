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
    <Route path='/signup'>
    <Signup/>
    </Route>
    <Signin/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
