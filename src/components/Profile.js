import React from 'react';
import PropTypes from 'prop-types';

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
        </div>
    );
}

Profile.propTypes = {
    profile:PropTypes.object.isRequired
}
export default Profile;