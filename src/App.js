import './App.scss';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  
  EarphonesPage,
  HeadphonesPage,
  HomePage,
  SpeakersPage, 
} from './pages'; 

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/earphones'>
          <EarphonesPage />
        </Route>
        <Route exact path='/headphones'>
          <HeadphonesPage />
        </Route>
        <Route exact path='/speakers'>
          <SpeakersPage />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
