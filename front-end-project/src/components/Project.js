// Section1.js

import React, { useState } from 'react';
import data from './DataProject';

function Project() {
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
        <div id="container_project" className='container_project'>
            <h2>Projets</h2>

            <div id='btn-filter' className="btn-group mb-4">
                {/* TOUT */}
                <button className={`btn ${selectedMain === 'All' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMainFilter('All')}>
                    Tout
                </button>

                {/* JAVASCRIPT */}
                <button className={`btn ${selectedMain === '<i class="fa-brands fa-js fa-xl"></i>' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMainFilter('<i class="fa-brands fa-js fa-xl"></i>')}>
                    <i class="fa-brands fa-js fa-xl"></i>
                </button>

                {/* PHP */}
                <button className={`btn ${selectedMain === '<i class="fa-brands fa-php fa-xl"></i>' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMainFilter('<i class="fa-brands fa-php fa-xl"></i>')}>
                    <i class="fa-brands fa-php fa-xl"></i>
                </button>

                {/* SYMFONY */}
                <button className={`btn ${selectedMain === '<i class="fa-brands fa-symfony fa-xl"></i>' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMainFilter('<i class="fa-brands fa-symfony fa-xl"></i>')}>
                    <i class="fa-brands fa-symfony fa-xl"></i>
                </button>

                {/* JAVA */}
                <button className={`btn ${selectedMain === '<i class="fa-brands fa-java fa-xl"></i>' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMainFilter('<i class="fa-brands fa-java fa-xl"></i>')}>
                    <i class="fa-brands fa-java fa-xl"></i>
                </button>

                {/* WORDPRESS */}
                <button className={`btn ${selectedMain === '<i class="fa-brands fa-wordpress fa-xl"></i>' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMainFilter('<i class="fa-brands fa-wordpress fa-xl"></i>')}>
                    <i class="fa-brands fa-wordpress fa-xl"></i>
                </button>

                {/* SHOPIFY */}
                <button className={`btn ${selectedMain === '<i class="fa-brands fa-shopify fa-xl"></i>' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMainFilter('<i class="fa-brands fa-shopify fa-xl"></i>')}>
                    <i class="fa-brands fa-shopify fa-xl"></i>
                </button>

            </div>

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

export default Project;
