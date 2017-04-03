import React, { Component } from 'react';
import { connect } from 'react-redux';

const SingleRepo = ({ repo }) =>{
    return(
        <h1>{repo.name}</h1>
    );
};

const mapStateToProps = (state, ownProps)=>{
    // console.log(ownProps);
    return{
        repo:state.repos.data.find(repo => repo.name === ownProps.params.repoId)
        // repo:state.repos.data
    }
}

export default connect(mapStateToProps)(SingleRepo);