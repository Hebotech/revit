import { useState, useEffect } from 'react';
import Link from 'next/link';

import CustomMarker from '../components/Atoms/Marker';

import ReactMapboxGl, {
  Layer,
  Feature,
  Marker,
  Popup,
  ZoomControl,
  ScaleControl,
  Image,
} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function distribuidores() {
  const [asyncStatus, setAsyncStatus] = useState('pending');
  const [fetchData, setFetchData] = useState('fetchingData');
  const [activeMarker, setActiveMarker] = useState(null);

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiaXJ2aW5nLWhlYm8iLCJhIjoiY2tlYzlibHNrMDIybjJ0cDloOGM1Y3Q1OSJ9.2fBGzUh_npTwBo4hoFPBXg',
  });

  useEffect(() => {
    let bringCompanies = async () => {
      try {
        let response = await fetch(`https://apihebo.online/revit/companies`);
        let { companies } = await response.json();
        let markersFinal = companies
          .filter((company) => {
            return (
              company.properties.address &&
              company.properties.address.value &&
              company.properties.address.value !== ''
            );
          })
          .filter((company) => {
            return (
              company.properties.ubicaciones_mapa &&
              company.properties.ubicaciones_mapa.value.length &&
              company.properties.ubicaciones_mapa.value !== ''
            );
          })
          .flatMap(({ properties: company }, index) => {
            let coordinatesArray = company.ubicaciones_mapa.value
              .replace(/\s+/g, '')
              .split(';')
              .map((coordine, index) => {
                let coordinates = coordine
                  .replace(/\s+/g, '')
                  .split(',')
                  .reverse();

                let finalObject = {
                  name: company.name.value,
                  website: company.website ? company.website.value : null,
                  description: company.description
                    ? company.description.value
                    : null,
                  fav: company.fav ? company.fav.value : false,
                  address: company.address.value.split(';')[index],
                  coordinates,
                };

                return finalObject;
              });
            return coordinatesArray;
          });
        setFetchData(markersFinal);
        setAsyncStatus('resolved');
      } catch (error) {
        setAsyncStatus('error');
        console.log('ERRORRR=>', error);
        setFetchData(error);
      }
    };

    bringCompanies();
  }, []);

  switch (asyncStatus) {
    case 'pending':
      return (
        <div
          className='container-fluid justify-content-center align-items-center align-content-center'
          style={{
            minHeight: '100vh',
          }}
        >
          <div className='row h-100  justify-content-center align-items-center align-content-center'>
            <div className='col-6'>
              <img src='/brand/full-logo-black.svg' alt='' className='h-100' />
            </div>
          </div>
        </div>
      );

    case 'resolved':
      return (
        <div className='container-fluid p-3 distribuidores-view'>
          <div className='row text-center'>
            <div className='col-12 text-center'>
              <h1>Distribuidores oficiales</h1>
            </div>
          </div>
          <Map
            style='mapbox://styles/irving-hebo/ckorx45p305vh18k2mr8f65pl'
            containerStyle={{
              height: '100vh',
              width: '90vw',
              margin: 'auto',
              borderRadius: '8px',
            }}
            zoom={[5]}
            center={[-102.2411842, 22.7787241]}
          >
            <ZoomControl />
            <ScaleControl />

            {fetchData.map((company, index) => (
              <Marker
                key={company.coordinates[0]}
                coordinates={company.coordinates}
                renderChildrenInPortal={true}
              >
                <CustomMarker company={company} index={index} />
              </Marker>
            ))}
          </Map>
        </div>
      );
    case 'error':
      return <div></div>;
  }
}

export default distribuidores;
