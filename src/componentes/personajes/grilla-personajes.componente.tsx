import './grilla-personajes.css';
import './tarjeta-personaje.css';
import { Character } from '../../store/slices/character/characterSlice';
import { useAppSelector } from '../../store/store';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { FILTER_CHARACTERS } from '../../store/slices/character/characterSlice';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
export interface ITarjetaPersonaje {
    nombre: string;
    UrlImagen: string;
    esFavorito: boolean;
}

export interface GrillaPersonajesProps {
    initialCharacters: Character[];
}

const GrillaPersonajes = ({ initialCharacters }: GrillaPersonajesProps) => {
    const { isLoading, isError, filteredCharacters } = useAppSelector(state => state.character);
    const [searchTerm, setSearchTerm] = useState("");
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

/*     const charactersToDisplay = searchTerm === null || searchTerm.trim() === ' ' ? initialCharacters : filteredCharacters; */
   
   return <div className="grilla-personajes">

        {isLoading ? <p> Cargando...</p> :
            charactersToDisplay.map(character =>
                <TarjetaPersonaje
                    key={character.id}
                    nombre={character.name}
                    UrlImagen={character.image}
                    esFavorito={false}
                />
            )}
        {isError && <p>Hubo un error al cargar los personajes</p>}
    </div>
}

export default GrillaPersonajes;