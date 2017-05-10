import React from 'react';
import Image from './Image';
import { Link } from 'react-router';
import { Like, Fork } from './portfolioUI';
import { baseRoot } from '../utils/const.js';




const BoardSingle = (props) =>{
    const goTo = () => props.updateSingleRepo(props.data.id);
    return(
        <div className="board-single">
            <Image img={props.img}/>
            <div  onClick={goTo} ><span>{props.data.name}</span></div>
        <div className="board-single__num">
            <span><Like num={props.data.watchers_count} /></span>
            <span><Fork num={props.data.watchers_count} /></span>
        </div>
        <div className="board-single__btn">
        {
            props.data.has_pages ?
            <a href={`https://${props.data.owner.login}.github.io/${props.data.name}`} target="_blank">Demo</a>:
            null
        }
        <a href={props.data.html_url} target="_black" >Source</a>
        </div>

        </div>

    )

}

export default BoardSingle;