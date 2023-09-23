// Section1.js

import React, { useState } from 'react';
import data from './Data';

function Project() {
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');

    const handleDifficultyFilter = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const filteredProjects = data.filter((project) => {
        if (selectedDifficulty === 'All') {
            return true;
        } else {
            return project.difficulty === selectedDifficulty;
        }
    });

    return (
        <div className='container_project'>
            <h2>Projets</h2>

            <div id='btn-filter' className="btn-group mb-4">
                <button className={`btn ${selectedDifficulty === 'All' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('All')}>
                    All
                </button>
                <button className={`btn ${selectedDifficulty === '😄' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('😄')}>
                    Beginner
                </button>
                <button className={`btn ${selectedDifficulty === '😶' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('😶')}>
                    Intermediate
                </button>
                <button className={`btn ${selectedDifficulty === '😭' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleDifficultyFilter('😭')}>
                    Advanced
                </button>
            </div>

            <div id="card" className="d-flex justify-content-center flex-wrap">
                {filteredProjects.map((project) => (
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
        </div>
    );
}

export default Project;
