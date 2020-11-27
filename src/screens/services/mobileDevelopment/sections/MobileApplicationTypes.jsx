import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { typesApplication } from '#constants/services/MobileDevelopment';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle="Tipos de aplicaciones móviles"
    typesApplication={typesApplication}
    image="/assets/images/tipos-aplicaciones-moviles.png"
  />
);

export default MobileApplicationTypes;
