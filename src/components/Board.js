import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataProfile, fetchDataRepos, updateSingleRepo } from '../actions/repos';
import { bindActionCreators } from 'redux';
import BoardSingle from './BoardSingle';



class Board extends Component {

    render(){
        return(
            <div>

                <div className="board-view-table">
                {this.props.repos.data ?
                    this.props.repos.data.map((elem,i)=>{
                        return <BoardSingle img={elem.language} key={i} data={elem} vars={this.props.vars} updateSingleRepo={this.props.updateSingleRepo} />
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
        repos:state.repos,
        vars:state.repos.vars
    }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    // setUserName:bindActionCreators(setUserName, dispatch),
    fetchDataRepos:bindActionCreators(fetchDataRepos, dispatch),
    fetchDataProfile:bindActionCreators(fetchDataProfile, dispatch),
    updateSingleRepo:bindActionCreators(updateSingleRepo, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);