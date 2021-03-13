import { useState, useEffect } from 'react';
import Link from 'next/link';

function distribuidores() {
  const [asyncStatus, setAsyncStatus] = useState('pending');
  const [fetchData, setFetchData] = useState('fetchingData');

  useEffect(() => {
    let bringCompanies = async () => {
      try {
        let response = await fetch(`https://apihebo.online/revit/companies`);
        let { companies } = await response.json();
        console.log(companies);
        setFetchData(companies);
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
          <div className='row m-0 align-items-stretch align-content-stretch'>
            {fetchData.map((company, index) => (
              <div key={index} className='col-md-4 col-6 my-3'>
                <div className='card text-center h-100'>
                  <div className='card-body'>
                    {company.properties.name ? (
                      <h5 className='card-title'>
                        {company.properties.name.value}
                      </h5>
                    ) : (
                      <div />
                    )}

                    {company.properties.website ? (
                      <a
                        rel='no-follow'
                        target='_blank'
                        href={`https://${company.properties.website.value}`}
                        className='card-link'
                      >
                        {company.properties.website.value}
                      </a>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'error':
      return <div></div>;
  }
}

export default distribuidores;
