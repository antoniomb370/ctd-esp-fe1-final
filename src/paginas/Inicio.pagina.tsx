import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { GET_CHARACTERS } from "../store/slices/character/thunks";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = ({}) => {
  const dispacth = useAppDispatch();
  const { valor: valorPagina } = useAppSelector((state) => state.page)
  const { characters} = useAppSelector((state) => state.character)

  // este punto esta bien 
  useEffect(() => {
    dispacth(GET_CHARACTERS({numeroPagina: valorPagina,parametro:'page'}));
  }, [valorPagina]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger"> Limpiar Filtros</button>
      </div>
      <Filtros   />
      <Paginacion valorPagina={valorPagina} />
      <GrillaPersonajes initialCharacters={characters} />
      <Paginacion valorPagina={valorPagina}/>
    </div>
  );
};

export default PaginaInicio;
