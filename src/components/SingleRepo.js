import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Image from './Image';

const SingleRepo = (props) =>{
    if ((!props.repo) || (!props.profile) ){
        // location.href='https://serpry.github.io/portfolio';
        location.href='http://localhost:3000/portfolio';
    }else{
        var singleRepo = props.repo.filter(repo=> repo.name === props.ownProps.params.repoId)[0];
        console.info(singleRepo);
    }
    return(
        <div className="single-repo">
            <div className="repo-profile">
                <div className="repo-profile__avatar"><img src={props.profile.avatar_url} /></div>
                <div className="repo-profile__name">{props.profile.name}</div>
                <div className="repo-profile-profile-btn"><a href={`https://github.com/${props.profile.login}`} target="_blank">GitHub</a></div>
            </div>
            <span className="single-repo__name">{singleRepo.name}</span>
            <Image img={singleRepo.language} />
        </div>
    );
};

const mapStateToProps = (state, ownProps)=>{
    // console.log(ownProps);
    return{
        repo:state.repos.data,
        ownProps,
        profile:state.repos.profile
    }
}

export default connect(mapStateToProps)(SingleRepo);