import React from 'react';
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



export default Projects;