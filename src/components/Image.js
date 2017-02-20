import React from 'react';


const Image = (props)=>{
    let path =`` ;
    return(
        <img className="project__img" src={process.env.PUBLIC_URL+'/langs/'+props.img+'.png'}  alt="project" />
    );
}

export default Image;