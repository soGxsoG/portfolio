import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Board from './components/Board';
import Projects from './components/Projects';
import Profile from './components/Profile';
import SingleRepo from './components/SingleRepo';
import {fetchDataRepos, fetchDataProfile, fetchOfflineData, updateProps, updateSingleRepo } from './actions/repos';
import { devUserName, baseRoot } from './utils/const';
// import offlineData from './utils/offlineData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{
        userName:'serpry'
      },
      view:'lines',
      userName: process.env.NODE_ENV=== 'development' ? devUserName : location.hostname.match(/\w+/)[0],
      repoURL: process.env.NODE_ENV=== 'development' ? baseRoot : location.hostname.match(/\w+/)[4]
 // in dev put here your profile name
    };
   
    this._setView = this._setView.bind(this);
    this._setSingleRepo = this._setSingleRepo.bind(this);
  }

_setView(view){
    this.setState({view});
  }

_setSingleRepo(id){
  this.setState({sigleRepo:id});
} 
componentDidMount(){
  // fetching data from API
  this.props.fetchDataRepos(this.state.userName);
  this.props.fetchDataProfile(this.state.userName);
  this.props.updateProps({repoURL:this.state.repoURL});

}


  render() {
    if (!this.props.repos.data){
      return null;
    }
    return (
        <div>

          {this.props.repos.profile && !this.props.singleRepo ?
            <Profile profile={this.props.repos.profile} data={this.state.data} view={this._setView} />  :
            null
          }
          {!this.props.singleRepo  && this.state.view === 'lines' ?
              <Projects repos={this.props.repos.data} updateSingleRepo={this.props.updateSingleRepo}/>:
              !this.props.singleRepo ?
                <Board/>:
                null
          }
          {this.props.singleRepo ?
            <SingleRepo/>:
            null
          }
        </div>
    );
  }
}

const mapStateToProps = (state,ownProps) =>{
  return {
    repos: state.repos,
    singleRepo:state.repos.singleRepo
  };
};
const mapDispatchToProps = (dispatch) =>{
  return{
    fetchDataRepos:bindActionCreators(fetchDataRepos, dispatch),
    fetchDataProfile:bindActionCreators(fetchDataProfile, dispatch),
    fetchOfflineData:bindActionCreators(fetchOfflineData, dispatch),
    updateProps:bindActionCreators(updateProps, dispatch),
    updateSingleRepo:bindActionCreators(updateSingleRepo, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
