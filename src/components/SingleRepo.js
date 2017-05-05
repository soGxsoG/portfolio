import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import Profile from './Profile';
import Image from './Image';
import { Like, Fork } from './portfolioUI';
import { load } from '../actions/repos';
import { baseRoot, devUserName } from '../utils/const.js';

const SingleRepo = (props) =>{
    const backDoor = () =>{
        if (process.env.NODE_ENV=== 'development'){
            return `http://localhost:3000/${baseRoot}`;

        }else{
            return `https://${location.hostname.match(/\w+/)[0]}.github.io/${baseRoot}`;
        }
    }
    if ((!props.repo) || (!props.profile) ){
        location.href = backDoor();
    }else{
        var singleRepo = props.repo.filter(repo=> repo.name === props.ownProps.params.repoId)[0];
        console.info(singleRepo);
    }

    return(
        <div className="single-repo">
            <div className="repo-profile">
                <div className="repo-profile__avatar"><img src={props.profile.avatar_url} /></div>
                <div className="repo-profile__name">{props.profile.name}</div>
                <div className="repo-profile__btns">
                    <div className="repo-profile-profile-btn"><a href={`https://github.com/${props.profile.login}`} target="_blank">GitHub</a></div>
                    <div className="repo-profile__back-btn"><Link to={backDoor()} >Back</Link></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9 col-lg-9 col-sm-9 col-xs-12 single-repo__main">
                    <span className="single-repo__name">{singleRepo.name}</span>
                    <div className="row">
                        <div className="col-md-1 col-lg-1 col-sm-1 col-xs-3 single-repo__labes">
                            <div className="labels">
                                <Like num={singleRepo.watchers_count} />
                                <Fork num={singleRepo.forks_count} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3 hidden-xs single-repo__aside">
                    <Image img={singleRepo.language} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 single-repo__main description-wrapper">
                    <span className="single-repo__description">
                    {
                        singleRepo.description ? singleRepo.description : <span>There is no description</span>
                    
                    }</span>
                </div>
                <div className="col-md-3 col-lg-3 hidden-xs single-repo__aside">
                </div>
            </div>
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