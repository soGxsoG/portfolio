import React from 'react';
import Image from './Image';
import { Link } from 'react-router';
import { Like, Fork } from './portfolioUI';




const BoardSingle = (props) =>{
    return(
        <div className="board-single">
        <Image img={props.img}/>
        <Link to={`/${props.data.name}`}><span>{props.data.name}</span></Link>
        <div className="board-single__num">
        <span><Like num={props.data.watchers_count} /></span>
        <span><Fork num={props.data.watchers_count} /></span>
        </div>
        <div className="board-single__btn">
        <a>Demo</a>
        <a href={props.data.html_url} >Source</a>
        </div>

        </div>

    )

}

export default BoardSingle;