import React from 'react';


const Image = (props)=>{

   let url = process.env.PUBLIC_URL+'/langs/'+props.img+'.png'; // dev
//    let url = process.env.PUBLIC_URL+'/langs/'+props.img.toLowerCase()+'.png'; // product

    if (props.img === 'null'){
        url = process.env.PUBLIC_URL+'/langs/null.png';
    }
    return(
        <img className="project__img" src={url} alt="project" />
    );
}

export default Image;