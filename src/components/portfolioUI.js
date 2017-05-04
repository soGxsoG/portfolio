import React from 'react';
import PropTypes from 'prop-types';



export const Like = (props) =>{
    return (
        <div className="btn-like">
        <i className="fa fa-eye my-eye" aria-hidden='true'></i>
        {props.num}
        </div>
    )
}
Like.propTypes = {
    num:PropTypes.number.isRequired
}



export const Fork = (props) =>{
    return (
        <div className="btn-fork">
        <i className="fa fa-code-fork my-code-fork" aria-hidden='true'></i>
        {props.num}
        </div>
    )
}
Fork.propTypes = {
    num:PropTypes.number.isRequired
}