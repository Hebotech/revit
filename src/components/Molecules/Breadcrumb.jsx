import Link from 'next/link';

function Breadcrumb({ level, product, estilo, tipo }) {
  return (
    <nav aria-label='breadcrumb'>
      <ol class='breadcrumb'>
        <li class='breadcrumb-item'>
          <Link href={`/todos`}>
            <a>TODOS</a>
          </Link>
        </li>

        {estilo ? (
          <li class='breadcrumb-item'>
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
          <li class='breadcrumb-item'>
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
          <li class='breadcrumb-item active' aria-current='page'>
            {product.name}
          </li>
        ) : null}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
