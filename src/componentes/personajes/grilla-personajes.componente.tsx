import './grilla-personajes.css';
import './tarjeta-personaje.css';
import { useAppSelector } from '../../store/store';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { FILTER_CHARACTERS } from '../../store/slices/character/characterSlice';
import {  IGrillaPersonajesProps} from './interfaceGrillaPersonaje';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */


const GrillaPersonajes = ({ initialCharacters }: IGrillaPersonajesProps ) => {
    const { isLoading, isError, filteredCharacters } = useAppSelector(state => state.character);
    const [searchTerm, setSearchTerm] = useState("");
/*     const [currentPage, setCurrentPage] = useState(1);
    const charactersPerPage = 10; */
    const dispatch = useDispatch();



    useEffect(() => {
        if (searchTerm) {
            dispatch(FILTER_CHARACTERS(searchTerm));
        } else {
            dispatch(FILTER_CHARACTERS(""));
        }
    }, [searchTerm, dispatch]);

    
    const charactersToDisplay =  searchTerm.trim() ==="" 
    ? filteredCharacters 
    : initialCharacters 

  /* const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
 */
/*   const charactersToDisplay = searchTerm.trim() === "" ? filteredCharacters : initialCharacters;
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = charactersToDisplay.slice(indexOfFirstCharacter, indexOfLastCharacter); */




   return <div className="grilla-personajes">

        {isLoading ? <p> Cargando...</p> :
            charactersToDisplay.map(characters =>
                <TarjetaPersonaje
                    key={characters.id}
                    nombre={characters.name}
                    UrlImagen={characters.image}
                    esFavorito={false}
                />
            )}
        {isError && <p>Hubo un error al cargar los personajes</p>}
    </div>
}

export default GrillaPersonajes;