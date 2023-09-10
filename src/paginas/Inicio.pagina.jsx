import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { GET_CHARACTERS } from "../store/slices/character/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const dispacth = useDispatch();
const {characters} = useSelector(state => state.character)

    useEffect(() => {
    dispacth(GET_CHARACTERS({data: {page: 1}}));
    }, []);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger"> Limpiar Filtros</button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes initialCharacters={characters} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
