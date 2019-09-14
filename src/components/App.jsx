import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import {Kegs, BeerTypes} from './Data';
import Error404 from './Error404';
import v4 from "UUID";
import Moment from 'moment';
import KegsList from './KegsList';
import AddNewKeg from './AddNewKeg';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      kegs: {},
      beerTypes : BeerTypes
    }
    this.handleNewKeg = this.handleNewKeg.bind(this);
    this.handleRemovePintFromKeg = this.handleRemovePintFromKeg.bind(this);
    this.handleAddPintToKeg = this.handleAddPintToKeg.bind(this);
    }

    handleNewKeg(newKeg)
    {
      newKeg.timeBrewed = new Moment();
      let newKegId = v4();
      var newKegList = Object.assign({}, this.state.kegs, {[newKegId] : newKeg})
      this.setState({kegs: newKegList});
    }

    handleRemovePintFromKeg(kegId)
    {
  
      let kegsClone = Object.assign({}, this.state.kegs);
      kegsClone[kegId].pintsLeft--;
      this.setState({kegs : kegsClone});
    }

    handleAddPintToKeg(kegId)
    {
      let kegsClone = Object.assign({}, this.state.kegs);
      kegsClone[kegId].pintsLeft++;
      this.setState({kegs : kegsClone});
    }


  render(){

    
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=> <KegsList 
        kegs = {this.state.kegs}
        onNewKeg = {this.handleNewKeg}
        onAddPintToKeg = {this.handleAddPintToKeg} 
        onRemovePintFromKeg= {this.handleRemovePintFromKeg}
        />}/>
        <Route exact path='/newkeg' render={() => <AddNewKeg 
          onNewKegAdd = {this.handleNewKeg}
        />}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
  
  }
}

export default App;

//add admin functionality