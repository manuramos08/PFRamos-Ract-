import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className='loading'>
      <p className='pLoader'>Cargando productos...</p>
      <Spinner animation="border" role="status" className='spinner'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader