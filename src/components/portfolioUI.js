import React from 'react';



export const Like = (props) =>{
    return (
        <div className="btn-like">
        <i className="fa fa-eye my-eye" aria-hidden='true'></i>
        {props.num}
        </div>
    )
}

export const Fork = (props) =>{
    return (
        <div className="btn-fork">
        <i className="fa fa-code-fork my-code-fork" aria-hidden='true'></i>
        {props.num}
        </div>
    )
}