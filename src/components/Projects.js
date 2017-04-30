import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';



class Projects extends React.Component{
    
    render(){
        console.log(this.props.repos);
        return(
            <div className="projects">
                {this.props.repos.map((elem,i) =>{
                   return <Project key={i} data={elem} id={i}/>
                })}
            </div>
        );
    }
}

Projects.propTypes={
    repos:PropTypes.array.isRequired
}

export default Projects;