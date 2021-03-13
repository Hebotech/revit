import Link from 'next/link';
export const RenderSwitch = ({ activeNav, estilos, tipos }) => {
  switch (activeNav) {
    case 'style':
      return (
        <>
          <div className='col-md-6 col-12'>
            <h4>Encuentra tu producto favorito</h4>
          </div>
          <div className='col-md-6 col-12 text-uppercase'>
            <ul className='-list row'>
              {estilos.map((estilo) => (
                <li className='col-4' key={estilo}>
                  <Link href={`/estilos/${estilo}`}>
                    <a className='text-uppercase'>{estilo}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      );

    case 'type':
      return (
        <>
          <div className='col-md-6 col-12'>
            <h4>Los mejores estílos de producto</h4>
          </div>
          <div className='col-md-6 col-12 text-uppercase'>
            <ul className='-list row'>
              {tipos.map((tipo) => (
                <li className='col-4' key={tipo}>
                  <Link href={`/tipos/${tipo}`}>
                    <a>{tipo}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      );

    default:
      break;
  }
};
