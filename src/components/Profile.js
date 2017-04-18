import React from 'react';

const Profile = (props)=>{
    // console.log(props.data.avatar_url);
    const btnBoard = document.querySelector('.fa-th');
    const btnLines = document.querySelector('.fa-list');
    const _updateToBoard = ()=>{
        props.view('board');
        btnBoard.classList.add('active');
        btnLines.classList.remove('active');
    }
    const _updateToLines = ()=>{
        props.view('lines');
        btnLines.classList.add('active');
        btnBoard.classList.remove('active');
    }

    return(
        
        <div className="profile row">
            <div className="col-md-12 col-lg-12 col-sm-12">
                <img src={props.profile.avatar_url} alt="main img" className="profile__img"/>
                <span className="profile__name">{props.profile.name}</span>
                <div className="navigation">
                    <i className="fa fa-th" onClick={_updateToBoard} aria-hidden='true'></i>
                    <i className="fa fa-list active" onClick={_updateToLines} aria-hidden='true'></i>
                </div>
            </div>
            {/*<div className="profile__info col-md-6 col-lg-6 col-sm-12">
                <span className="profile__info-email">{props.profile.email}</span>
                <span className="profile__info-location">{props.profile.location}</span>
                <p className="profile__info-bio">{props.profile.bio}</p>
            </div>*/}
        </div>
    );
}

export default Profile;