import './paginacion.css';
import { useDispatch } from 'react-redux';
import { PREVIOUS_PAGE, NEXT_PAGE } from '../../store/slices/paginacion/paginacionSlice';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * paginacion
 * 
 * @returns un JSX element 
 */
interface PaginacionProps {
    valorPagina: number;
   
}


const Paginacion = ({ valorPagina}: PaginacionProps) => {

    const dispatch = useDispatch();

    return (
        <div className="paginacion">
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