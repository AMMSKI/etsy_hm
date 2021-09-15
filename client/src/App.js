import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react'
import Home from './Components/Home';
import Things from './Components/Things';

function App() {
  return (
    <>
      <NavBar />
      <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/things' component={Things}/>
      

      </Switch>
      </Container>
    </>
  );
}

export default App;
