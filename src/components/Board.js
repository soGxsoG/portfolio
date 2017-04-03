import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataProfile, fetchDataRepos } from '../actions/repos';
import { bindActionCreators } from 'redux';
import Profile from './Profile';
import BoardSingle from './BoardSingle';



class Board extends Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchDataProfile(this.props.repos.userName);
        this.props.fetchDataRepos(this.props.repos.userName);
        
    }
    render(){
        return(
            <div>
                {this.props.repos.profile ?
                    <Profile profile={this.props.repos.profile} />  :
                    null
                }
                <div className="board-view-table">
                {this.props.repos.data ?
                    this.props.repos.data.map((elem,i)=>{
                        return <BoardSingle img={elem.language} key={i} data={elem} />
                    }):
                    null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        repos:state.repos
    }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    // setUserName:bindActionCreators(setUserName, dispatch),
    fetchDataRepos:bindActionCreators(fetchDataRepos, dispatch),
    fetchDataProfile:bindActionCreators(fetchDataProfile, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);