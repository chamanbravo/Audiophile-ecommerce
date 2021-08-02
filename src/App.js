import './App.scss';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  
  EarphonesPage,
  HeadphonesPage,
  HomePage,
  SpeakersPage,
  SingleProductPage, 
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
        <Route exact path='/product/:id'>
          <SingleProductPage />
        </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
