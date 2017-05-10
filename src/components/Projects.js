import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSingleRepo } from '../actions/repos';

import Project from './Project';



class Projects extends React.Component{
    
    render(){
        // console.log(this.props.repos);
        return(
            <div className="projects">
                {this.props.repos.map((elem,i) =>{
                   return <Project key={i} data={elem} id={i} updateSingleRepo={this.props.updateSingleRepo} />
                })}
            </div>
        );
    }
}


const mapStatToProps = (state)=>{
    return{
        repos:state.repos.data,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateSingleRepo:bindActionCreators(updateSingleRepo, dispatch)
    }
}

export default connect(mapStatToProps, mapDispatchToProps)(Projects);