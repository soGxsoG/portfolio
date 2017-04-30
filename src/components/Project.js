import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Image from './Image';
import { Button } from 'semantic-ui-react';
import { Like, Fork } from './portfolioUI';
import { baseRoot } from '../utils/const';



const Project = (props)=>{
 
    return(
        
        <div className="project clearfix" data-index={props.id}>
            <Image img={props.data.language} />
            <div className='project__flex-item project__flex-item__name'><Link className='project__name' to={`${baseRoot}/${props.data.name}`}>{props.data.name}</Link></div>
            <div className='project__flex-item project__flex-item__links'>
                {props.data.has_pages?
                <a target="_blank" href={`http://${props.data.owner.login}.github.io/${props.data.name}`}>Demo</a> :
                null
                }
                <a target="_black" href={props.data.html_url}>Source</a>
            </div>
            
            <div className="project__buttons project__flex-item">
            <Like num={props.data.watchers} />
            <Fork num={props.data.forks} />
            </div>

        </div>
        
    )
}

Project.propTypes={
    data:PropTypes.object.isRequired
}

export default Project;