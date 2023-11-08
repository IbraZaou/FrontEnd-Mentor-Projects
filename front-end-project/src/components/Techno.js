// Section1.js

import React, { useState } from 'react';
import data from './DataLanguage';

function Techno() {
    const [selectedTechno, setSelectedTechno] = useState('All');
    const [showAllTechno, setShowAllTechno] = useState(false);

    const handleTechnoFilter = (techno) => {
        setSelectedTechno(techno);
        setShowAllTechno(false);
    };

    const filteredTechnos = data.filter((techno) => {
        if (selectedTechno === 'All') {
            return true;
        } else {
            return techno.techno === selectedTechno;
        }
    });

    const technoToShow = showAllTechno ? filteredTechnos : filteredTechnos;

    return (
        <div id='container_techno' className='container_project'>
            <h2>Mes technologies</h2>

            <div id='btn-filter' className="btn-group mb-4">
                <button className={`btn ${selectedTechno === 'All' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleTechnoFilter('All')}>
                    Tout
                </button>
                <button className={`btn ${selectedTechno === 'frontend' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleTechnoFilter('frontend')}>
                    Front-End
                </button>
                <button className={`btn ${selectedTechno === 'backend' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleTechnoFilter('backend')}>
                    Back-End
                </button>
                <button className={`btn ${selectedTechno === 'autre' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleTechnoFilter('autre')}>
                    Autre
                </button>
            </div>

            <div className="d-flex justify-content-center flex-wrap container_techno">
                {technoToShow.map((techno) => (
                    <a id='previewTechno' href={techno.imageLink}>
                        <p>{techno.title}</p>
                        <img src={techno.image} alt={techno.title} />
                        <p id='hidden'>{techno.techno}</p>
                    </a>
                ))}
            </div>

        </div>
    );
}

export default Techno;
