import React, { Component } from 'react';
import './App.css';
import load from './utils/load';
import Profile from './components/Profile';
import Projects from './components/Projects';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null,
      profile:null,
      repos:null,
     userName:location.pathname.slice(1) //dev location 
      // userName:location.hostname.match(/\w+/)[0] // production 
    };
  }
  // fetching data from API
  loadData(){
    load('./config/data.json') // JSON file for future features 
    .then( data =>{
      this.setState({data: data});
      load(`https://api.github.com/users/${this.state.userName}`) // User inforamation 
        .then(res =>{
          this.setState({profile:res});
        });
      load(`https://api.github.com/users/${this.state.userName}/repos`) // Information about all repos 
        .then(res=>{
          this.setState({repos:res});
        })
    })
  }
componentDidMount(){
  this.loadData();
}

  render() {
    if (!(this.state.data) || !(this.state.repos)){
      return null;
    }
    return (
        <div>
          {this.state.profile ?
          <Profile profile={this.state.profile} data={this.state.data} />  :
          null
          }
         {this.state.repos ?
          <Projects repos={this.state.repos}/>:
          null 
         }
        </div>
    );
  }
}

export default App;
