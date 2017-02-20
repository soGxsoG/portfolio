import React from 'react';

const Profile = (props)=>{
    console.log(props.data.avatar_url);
    return(
        <div className="profile row">
            <div className="col-md-6 col-lg-6 col-sm-12">
                <img src={props.profile.avatar_url} alt="main img" className="profile__img"/>
                <span className="profile__name">{props.profile.name}</span>
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