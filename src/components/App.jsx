import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Schedule from './Schedule';
import HomePage from './HomePage';
import Header from './Header';
import BeersList from './BeersList';
import PropTypes from 'prop-types';
import GetBeerDataArr from './Data';
import Beers from './Beers';
function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Beerslist' component={BeersList} />
        <Route exact path='/schedule' component={Schedule} />
        <Route exact path='/spring' 
        render = {(props) => <Beers 
          name = {GetBeerDataArr()[0].name}
          items = {GetBeerDataArr()[0].items}
        isAuthed = {true}
        />}/>
        <Route exact path='/summer' 
        render = {(props) => <Beers 
          name = {GetBeerDataArr()[1].name}
          items = {GetBeerDataArr()[1].items}
        isAuthed = {true}
        />}/>
        <Route exact path='/fall' 
        render = {(props) => <Beers 
          name = {GetBeerDataArr()[2].name}
          items = {GetBeerDataArr()[2].items}
        isAuthed = {true}
        />}/>
        <Route exact path='/winter' 
        render = {(props) => <Beers 
          name = {GetBeerDataArr()[3].name}
          items = {GetBeerDataArr()[3].items}
        isAuthed = {true}
        />}/>
      </Switch>
    </div>
  );
}

export default App;
