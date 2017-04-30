import React from 'react';
import PropTypes from 'prop-types';


const Image = (props)=>{
    let url;
if (process.env.NODE_ENV=== 'development'){
    url = process.env.PUBLIC_URL+'/langs/'+props.img+'.png';
}else{
    url = process.env.PUBLIC_URL+'/langs/'+props.img.toLowerCase()+'.png'; 
}
    return(
        <img className="project__img" src={url} alt="project" />
    );
}

Image.propTypes ={
    img:PropTypes.string.isRequired
}

export default Image;