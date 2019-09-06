import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import BeerCategoryList from './BeerCategoryList';
import PropTypes from 'prop-types';
import GetBeerDataArr from './Data';
import BeerCategory from './BeerCategory';
import Error404 from './Error404';
function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        
        <Route exact path='/BeerCategorylist' component={BeerCategoryList} />
        <Route exact path='/lager' 
        render = {(props) => <BeerCategory 
          name = {GetBeerDataArr()[0].name}
          Kegs = {GetBeerDataArr()[0].Kegs}
        isAuthed = {true}
        />}/>
        <Route exact path='/ipa' 
        render = {(props) => <BeerCategory 
          name = {GetBeerDataArr()[1].name}
          Kegs = {GetBeerDataArr()[1].Kegs}
        isAuthed = {true}
        />}/>
        <Route exact path='/pale ale' 
        render = {(props) => <BeerCategory 
          name = {GetBeerDataArr()[2].name}
          Kegs = {GetBeerDataArr()[2].Kegs}
        isAuthed = {true}
        />}/>
        <Route exact path='/stout' 
        render = {(props) => <BeerCategory 
          name = {GetBeerDataArr()[3].name}
          Kegs = {GetBeerDataArr()[3].Kegs}
        isAuthed = {true}
        />}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
