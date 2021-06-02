import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import PublicLayout from './components/layouts/publicLayout';

import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Team from './pages/team';

const App = () =>{

  return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" layout={PublicLayout} component={Login}/>
    <Route exact path="/signup" layout={PublicLayout} component={SignUp}/>

    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/team" component={Team}/>
   </Switch>
    </BrowserRouter>
  )

}

export default App;
