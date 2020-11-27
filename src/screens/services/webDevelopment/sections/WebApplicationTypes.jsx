import React from 'react';
// import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import SectionApplicationTypes from '../components/SectionApplicationTypes';
import { typesApplication } from '#app/constants/services/WebDevelopment';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle="Nuestros servicios"
    typesApplication={typesApplication}
    image="/assets/images/tipos-aplicaciones-web.png"
  />
);

export default MobileApplicationTypes;
