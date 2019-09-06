import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Schedule from './Schedule';
import HomePage from './HomePage';
import Header from './Header';
import SeasonsList from './SeasonsList';
import PropTypes from 'prop-types';
import GetSeasonDataArr from './Data';
import Seasons from './Seasons';
function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/seasonslist' component={SeasonsList} />
        <Route exact path='/schedule' component={Schedule} />
        <Route exact path='/spring' 
        render = {(props) => <Seasons 
          name = {GetSeasonDataArr()[0].name}
          items = {GetSeasonDataArr()[0].items}
        isAuthed = {true}
        />}/>
        <Route exact path='/summer' 
        render = {(props) => <Seasons 
          name = {GetSeasonDataArr()[1].name}
          items = {GetSeasonDataArr()[1].items}
        isAuthed = {true}
        />}/>
        <Route exact path='/fall' 
        render = {(props) => <Seasons 
          name = {GetSeasonDataArr()[2].name}
          items = {GetSeasonDataArr()[2].items}
        isAuthed = {true}
        />}/>
        <Route exact path='/winter' 
        render = {(props) => <Seasons 
          name = {GetSeasonDataArr()[3].name}
          items = {GetSeasonDataArr()[3].items}
        isAuthed = {true}
        />}/>
      </Switch>
    </div>
  );
}

export default App;
