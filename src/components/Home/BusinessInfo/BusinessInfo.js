import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData = [
  {
    title: 'Opening Hours',
    description: 'We are open 7 days',
    icon: faClock,
    background: 'primary'
  },
  {
    title: 'Visit Our Locations',
    description: 'Brooklyn, NY 1003 USA',
    icon: faMapMarker,
    background: 'dark'
  },
  {
    title: 'Call us Now',
    description: '+15697854124',
    icon: faPhone,
    background: 'primary'
  },
];
const BusinessInfo = () => {
  return (
    <section className="row">
      {
        infosData.map(info =><InfoCard info={info}></InfoCard>)
      }
    </section>
  );
};

export default BusinessInfo;