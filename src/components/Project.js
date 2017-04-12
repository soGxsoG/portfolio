import React from 'react';
import { Link } from 'react-router';
import Image from './Image';
import { Button } from 'semantic-ui-react';
import { Like, Fork } from './portfolioUI';



const Project = (props)=>{
 
    return(
        
        <div className="project clearfix" data-index={props.id}>
            <Image img={props.data.language} />
            <Link to={`/${props.data.name}`}><span className="project__name">{props.data.name}</span></Link>
            <div className='project__flex-item'>
                {props.data.has_pages?
                <Button inverted color='olive' className="project__link-source"><a target="_blank" href={`http://${props.data.owner.login}.github.io/${props.data.name}`}>Demo</a></Button> :
                null
                }
                <Button inverted color='olive' className="project__link-demo"><a target="_black" href={props.data.html_url}>Source</a></Button>
            </div>
            
            <div className="project__buttons project__flex-item">
            <Like num={props.data.watchers} />
            <Fork num={props.data.forks} />
            </div>

        </div>
        
    )
}

export default Project;