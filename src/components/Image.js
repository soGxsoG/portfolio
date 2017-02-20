import React from 'react';


const Image = (props)=>{
    return(
        <img className="project__img" src={process.env.PUBLIC_URL+'/langs/'+props.img.toLowerCase()+'.png'}  alt="project" />
    );
}

export default Image;