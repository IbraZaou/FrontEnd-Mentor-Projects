import React from 'react';
import DescriptionClient from '../components/DescriptionClient';
import AvisClient from '../components/AvisClient';
import ProjectClient from '../components/ProjectClient';

const Client = () => {
    return (
        <div>
            <DescriptionClient />
            <ProjectClient />
            <AvisClient />
        </div>
    );
};

export default Client;