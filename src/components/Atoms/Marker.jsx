import { useState } from 'react';

function Marker({ index, company }) {
  const [activeMarker, setActiveMarker] = useState(false);
  return (
    <>
      <a
        href={`http://maps.google.com/?q=${
          company.name + ' ' + company.address
        }`}
        target='_blank'
        className='text-center'
      >
        <img
          src={`${
            company.fav ? '/images/map/fav.svg' : '/images/map/regular.svg'
          }`}
        />
        <h6 className='text-light'>{company.name}</h6>
      </a>
    </>
  );
}

export default Marker;
