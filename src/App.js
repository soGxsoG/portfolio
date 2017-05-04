import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Board from './components/Board';
import Projects from './components/Projects';
import Profile from './components/Profile';
import { setUserName, fetchDataRepos, fetchDataProfile, fetchOfflineData } from './actions/repos';
import { devUserName } from './utils/const'
// import offlineData from './utils/offlineData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{
        userName:'serpry'
      },
      view:'lines',
      userName: process.env.NODE_ENV=== 'development' ? devUserName : location.hostname.match(/\w+/)[0] // production 
 // in dev put here your profile name
    };
   
    this._setView = this._setView.bind(this);
  }
  _setView(view){
    this.setState({view});
  }
  // updateDimensions(){
  //   var w = window,
  //       d = document,
  //       documentElement = d.documentElement,
  //       body = d.getElementsByTagName('body')[0],
  //       width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
  //       console.log(this === window);
  //   if(width<450){
  //     (()=>{_setBoard()})()
  //   }
  // }

componentDidMount(){
  // fetching data from API
  this.props.fetchDataRepos(this.state.userName);
  this.props.fetchDataProfile(this.state.userName);
  // window.addEventListener("resize", this.updateDimensions);
    //  this.props.fetchOfflineData();
  // console.log('store =>', this.props.repos);

}


  render() {
    console.log(process.env.NODE_ENV);
    return (
        <div>

          {this.props.repos.profile ?
            <Profile profile={this.props.repos.profile} data={this.state.data} view={this._setView} />  :
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
