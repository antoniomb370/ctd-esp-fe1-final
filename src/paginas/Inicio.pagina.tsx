import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store/store";
import { GET_CHARACTERS } from "../store/slices/character/thunks";
import { useEffect } from "react";
import { FILTER_CHARACTERS } from "../store/slices/character/characterSlice";
import { NEXT_PAGE, PREVIOUS_PAGE } from "../store/slices/paginacion/paginacionSlice";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const dispatch = useAppDispatch();
  const { valor: valorPagina } = useAppSelector((state) => state.page);
  const characters = useAppSelector((state) => state.character.filteredCharacters);


  /* const handlePageChange = (newPage: number) => {
     // Llama a las acciones de paginación
     if (newPage > valorPagina) {
       dispatch(NEXT_PAGE());
     } else if (newPage < valorPagina) {
       dispatch(PREVIOUS_PAGE());
     }
   }; */

  useEffect(() => {
    dispatch(GET_CHARACTERS({ numeroPagina: valorPagina, parametro: 'page' }));
  }, [valorPagina]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger"> Limpiar Filtros</button>
      </div>
     
      {/*  <Paginacion currentPage={valorPagina} onPageChange={handlePageChange} />
      <GrillaPersonajes
  initialCharacters={characters}
  currentPage={valorPagina}
  setCurrentPage={handlePageChange}
/>
      <Paginacion currentPage={valorPagina} onPageChange={handlePageChange} /> */}

      <Filtros />
      <Paginacion valorPagina={valorPagina} />
      <GrillaPersonajes initialCharacters={characters} />
      <Paginacion valorPagina={valorPagina} />
    </div>
  );
};

export default PaginaInicio;
