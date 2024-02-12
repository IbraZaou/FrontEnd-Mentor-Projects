// Section1.js

import React, { useState } from 'react';
import data from './DataProjectClient';

function ProjectClient() {
    const [selectedMain, setSelectedMain] = useState('All');
    const [showAllProjects, setShowAllProjects] = useState(false);

    const handleMainFilter = (main) => {
        setSelectedMain(main);
        setShowAllProjects(false);
    };

    const filteredProjects = data.filter((project) => {
        if (selectedMain === 'All') {
            return true;
        } else {
            return project.main === selectedMain;
        }
    });

    const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 8);

    return (
        <div id="container_project" className='container_project_client'>
            <h2>Portofolio</h2>

            <div id="card" className="d-flex justify-content-center flex-wrap">
                {projectsToShow.map((project) => (
                    <div key={project.id} className="card mb-4 me-4">
                        <h5 className="card-title">{project.title}</h5>
                        <a id='preview' target='blank' href={project.imageLink}>
                            <img src={project.image} className="card-img-top" alt={project.title} /></a>
                        <div className="card-body">
                            <i id='arrow' class="fa-solid fa-arrow-down"></i>
                            <p id='desc' className="card-text">{project.description}</p>
                            <p className="card-text">{project.technologie}</p>
                            <p id='emoji' className="card-text">Ressenti : {project.feeling}</p>
                        </div>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                            Code Source <i class="fa-brands fa-github-alt"></i>
                        </a>
                    </div>
                ))}
            </div>

            <div className="show-btn">
                {showAllProjects ? (
                    <button className="btn btn-primary" onClick={() => setShowAllProjects(false)}>Voir moins</button>
                ) : (
                    filteredProjects.length > 8 && (
                        <button className="btn btn-primary" onClick={() => setShowAllProjects(true)}>Voir plus</button>
                    )
                )}
            </div>

        </div>
    );
}

export default ProjectClient;
