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
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
    this.handleRemovePintFromKeg = this.handleRemovePintFromKeg.bind(this);
    this.handleAddPintToKeg = this.handleAddPintToKeg.bind(this);
    }

    handleNewKeg(newKeg)
    {
      newKeg.timeBrewed = new Moment();
      let newKegId = v4();
      var newKegList = Object.assign({}, this.state.kegs, {[newKegId] : newKeg})
      console.log(newKegList);
      this.setState({kegs: newKegList});
    }

    // handleDeleteKeg(kegId)
    // {
    //   let kegsClone = this.state.kegs.slice();
    //   delete kegsClone.kegId;
    //   this.setState(kegsClone);
    // }

    handleRemovePintFromKeg(kegId)
    {
      // let kegsClone = this.state.kegs.slice();
      kegsClone[kegId].pints--;
      //for upvodte and downvote to work have to figure out how to copy and modify value of object
      this.setState();
    }

    handleAddPintToKeg(kegId)
    {
      let kegsClone = this.state.kegs.slice();
      kegsClone[kegId].pints++;
      this.setState(kegsClone);
    }


  render(){

    
  return(
    <div>
      <Header/>
      <Switch>
        {/* <Route exact path='/' component={HomePage} /> */}
        <Route exact path='/' render={()=> <KegsList 
        kegs = {this.state.kegs}
        onNewKeg = {this.handleNewKeg}
        onAddPintToKeg = {this.handleAddPintToKeg} 
        onRemovePintFromKeg= {this.handleRemovePintFromKeg}
        />}/>
        <Route exact path='/newkeg' render={() => <AddNewKeg 
          onNewKegAdd = {this.handleNewKeg}
        />}/>
        {/* <Route exact path='/lager' 
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
        />}/> */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
  
  }
}

export default App;

//add admin functionality