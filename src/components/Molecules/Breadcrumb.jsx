import Link from 'next/link';

function Breadcrumb({ level, product, estilo, tipo }) {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href={`/todos`}>
            <a>TODOS</a>
          </Link>
        </li>

        {estilo ? (
          <li className='breadcrumb-item'>
            {level === 'estilo' ? (
              `ESTILO: ${estilo.toUpperCase()}`
            ) : (
              <Link href={`/estilos/${estilo}`}>
                <a>ESTILO: {estilo.toUpperCase()}</a>
              </Link>
            )}
          </li>
        ) : null}

        {tipo ? (
          <li className='breadcrumb-item'>
            {level === 'tipo' ? (
              `TIPO:${tipo.toUpperCase()}`
            ) : (
              <Link href={`/tipos/${tipo}`}>
                <a>TIPO: {tipo.toUpperCase()}</a>
              </Link>
            )}
          </li>
        ) : null}

        {product ? (
          <li className='breadcrumb-item active' aria-current='page'>
            {product.name}
          </li>
        ) : null}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
