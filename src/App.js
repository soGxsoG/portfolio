import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Board from './components/Board';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUserName, fetchDataRepos, fetchDataProfile, fetchOfflineData } from './actions/repos';
// import offlineData from './utils/offlineData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{
        userName:'serpry'
      },
      view:'board',
      userName:'serpry',
      // userName:location.pathname.slice(1) //dev location 
      // userName:location.hostname.match(/\w+/)[0] // production 
    };
  }
  

componentDidMount(){
  // fetching data from API
  this.props.fetchDataRepos(this.state.userName);
  this.props.fetchDataProfile(this.state.userName);
    //  this.props.fetchOfflineData();
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
          {this.props.repos.data && this.state.view === 'lines' ?
            <Projects repos={this.props.repos.data}/>:
            this.props.repos.data ?
            <Board/>:
            null
          }
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
    fetchDataProfile:bindActionCreators(fetchDataProfile, dispatch),
    fetchOfflineData:bindActionCreators(fetchOfflineData, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
