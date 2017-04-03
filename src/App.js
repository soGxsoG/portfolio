import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import load from './utils/load';
import Profile from './components/Profile';
import Projects from './components/Projects';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUserName, fetchDataRepos, fetchDataProfile } from './actions/repos';
// import offlineData from './utils/offlineData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{
        userName:'serpry'
      },
      profile:null,
      repos:null,
      userName:'serpry'
      // userName:location.pathname.slice(1) //dev location 
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
  this.props.fetchDataRepos(this.state.userName);
  this.props.fetchDataProfile(this.state.userName);
  // console.log('store =>', this.props.repos);

}


  render() {
    // console.log('store is =>',this.props.repos);
    return (
        <div>
          
          {this.props.repos.profile ?
            <Profile profile={this.props.repos.profile} data={this.state.data} />  :
            null
          }
          {this.props.repos.data ?
            <Projects repos={this.props.repos.data}/>:
            null 
          }
          <Link to='/board'>board</Link>
        </div>
    );
  }
}

const mapStateToProps = (state,ownProps) =>{
  return {
    repos: state.repos
  };
};
const mapDispatchToProps = (dispatch) =>{
  return{
    setUserName:bindActionCreators(setUserName, dispatch),
    fetchDataRepos:bindActionCreators(fetchDataRepos, dispatch),
    fetchDataProfile:bindActionCreators(fetchDataProfile, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
