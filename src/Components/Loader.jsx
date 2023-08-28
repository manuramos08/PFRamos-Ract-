import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <>
      <p>Cargando productos...</p>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}

export default Loader