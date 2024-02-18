import React from 'react';
import DescriptionClient from '../components/DescriptionClient';
import AvisClient from '../components/AvisClient';
import ProjectClient from '../components/ProjectClient';
import FormTemplateClient from '../components/FormTemplateClient';

const Client = () => {
    return (
        <div>
            <DescriptionClient />
            <ProjectClient />
            <AvisClient />
            <FormTemplateClient />
        </div>
    );
};

export default Client;