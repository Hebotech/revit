import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = 'typef_orm_share',
      b = 'https://embed.typeform.com/';
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script');
      js.id = id;
      js.src = b + 'embed.js';
      q = gt.call(d, 'script')[0];
      q.parentNode.insertBefore(js, q);
    }
  }, []);
  return (
    <footer className='container-fluid main-footer p-5'>
      <a
        className='typeform-share button'
        href='https://form.typeform.com/to/zRvU6x86?typeform-medium=embed-snippet'
        data-mode='popover'
        style={{
          width: '70px',
          height: '70px',
          position: 'fixed',
          boxShadow:
            '0px 2px 12px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.08)',
          right: '26px',
          bottom: '26px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          background: '#000000',
          overflow: 'hidden',
          lineHeight: '0',
        }}
        data-submit-close-delay='1'
        target='_blank'
      >
        {' '}
        <span className='icon'>
          {' '}
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ marginTop: '6px' }}
          >
            {' '}
            <path
              d='M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z'
              fill='white'
            />{' '}
          </svg>{' '}
        </span>{' '}
      </a>

      <div className='row m-0'>
        <div className='col-12'>
          <small>
            Distribuidor oficial Revi't Sport México {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </footer>
  );
}
