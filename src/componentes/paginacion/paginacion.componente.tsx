import './paginacion.css';
import { useDispatch } from 'react-redux';
import { PREVIOUS_PAGE, NEXT_PAGE } from '../../store/slices/paginacion/paginacionSlice';
import { IPaginacionProps } from '../paginacion/interfacePaginacion';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * paginacion
 * 
 * @returns un JSX element 
 */



const Paginacion = ({ valorPagina }: IPaginacionProps) => {
    const dispatch = useDispatch();

    /*  const handlePreviousPage = () => {
         dispatch(PREVIOUS_PAGE());
         onPageChange(currentPage - 1);
     };
 
     const handleNextPage = () => {
         dispatch(NEXT_PAGE());
         onPageChange(currentPage + 1);
     }; */


    return (
        <div className="paginacion">

            {/*  <button className="primary" onClick={handlePreviousPage}>
                Anterior
            </button>
            <button className="primary" onClick={handleNextPage}>
                Siguiente
            </button> */}

            <button className="primary" onClick={() => dispatch(PREVIOUS_PAGE())}>
                Anterior
            </button>
            <button className="primary" onClick={() => dispatch(NEXT_PAGE())}>
                Siguiente
            </button>

        </div>
    );
}

export default Paginacion;