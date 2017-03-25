import React from 'react';
import Image from './Image';
import { Button } from 'semantic-ui-react';



const Project = (props)=>{
 
    return(
        <div className="project clearfix" data-index={props.id}>
            <Image img={props.data.language} />
            <span className="project__name">{props.data.name}</span>
            <div className='project__flex-item'>
                {props.data.has_pages?
                <Button inverted color='olive' className="project__link-source"><a target="_blank" href={`http://${props.data.owner.login}.github.io/${props.data.name}`}>Demo</a></Button> :
                null
                }
                <Button inverted color='olive' className="project__link-demo"><a target="_black" href={props.data.html_url}>Source</a></Button>
            </div>
            
            <div className="project__buttons project__flex-item">
            <Button
                color='red'
                content='Like'
                icon='star'
                label={{ basic: true, color:'red', pointing: 'left', content:props.data.watchers }}
            />
             <Button
                basic
                color='blue'
                content='Fork'
                icon='fork'
                label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: props.data.forks }}
            />
            </div>

        </div>
    )
}

export default Project;