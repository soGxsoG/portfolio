import React, { Component } from 'react';
import { connect } from 'react-redux';

const SingleRepo = (props) =>{
    if (!props.repo){
        // location.href='https://serpry.github.io/portfolio';
    }else{
        var singleRepo = props.repo.filter(repo=> repo.name === props.ownProps.params.repoId);
        console.info(singleRepo);
    }
    return(
        <div className="single-repo">
            <div className="single-repo__owner">
                <span className="single-repo__owner-name"></span>
                <span className="single-repo__owner-name"></span>
            </div>
            <span className="single-repo__name">{singleRepo[0].name}</span>
        </div>
    );
};

const mapStateToProps = (state, ownProps)=>{
    // console.log(ownProps);
    return{
        repo:state.repos.data,
        ownProps
        
    }
}

export default connect(mapStateToProps)(SingleRepo);