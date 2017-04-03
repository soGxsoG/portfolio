import React from 'react';
import Image from './Image';



const BoardSingle = (props) =>{
    return(
        <div className="board-single">
        <Image img={props.img}/>
        <span>{props.data.name}</span>
        <div className="board-single__num">
        <span>{props.data.watchers_count}</span>
        <span>{props.data.forks}</span>
        </div>
        <div className="board-single__btn">
        <a>Demo</a>
        <a href={props.data.html_url} >Source</a>
        </div>

        </div>

    )

}

export default BoardSingle;