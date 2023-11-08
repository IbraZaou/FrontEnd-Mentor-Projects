// Section1.js

import React, { useState } from 'react';
import data from './DataProject';

function Project() {
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [showAllProjects, setShowAllProjects] = useState(false);

    const handleDifficultyFilter = (difficulty) => {
        setSelectedDifficulty(difficulty);
        setShowAllProjects(false);
    };

    const filteredProjects = data.filter((project) => {
        if (selectedDifficulty === 'All') {
            return true;
        } else {
            return project.difficulty === selectedDifficulty;
        }
    });

    const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 8);

    return (
        <div id="container_project" className='container_project'>
            <h2>Projets</h2>

            <div id='btn-filter' className="btn-group mb-4">
                <button className={`btn ${selectedDifficulty === 'All' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('All')}>
                    Tout
                </button>
                <button className={`btn ${selectedDifficulty === '😄' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('😄')}>
                    😄
                </button>
                <button className={`btn ${selectedDifficulty === '😶' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('😶')}>
                    😶
                </button>
                <button className={`btn ${selectedDifficulty === '😭' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('😭')}>
                    😭
                </button>
            </div>

            <div id="card" className="d-flex justify-content-center flex-wrap">
                {projectsToShow.map((project) => (
                    <div key={project.id} className="card mb-4 me-4">
                        <a id='preview' href={project.imageLink}>
                            <img src={project.image} className="card-img-top" alt={project.title} /></a>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p id='desc' className="card-text">{project.description}</p>
                            <p className="card-text">{project.technologie}</p>
                            <p id='emoji' className="card-text">Ressenti : {project.difficulty}</p>
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

export default Project;
