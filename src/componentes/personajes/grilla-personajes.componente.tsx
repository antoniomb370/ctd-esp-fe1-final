import './grilla-personajes.css';
import './tarjeta-personaje.css';
import { Character } from '../../store/slices/character/characterSlice';
import { useAppSelector } from '../../store/store';
import TarjetaPersonaje from './tarjeta-personaje.componente';

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
    initialCharacters: Character [];
}

const GrillaPersonajes = ({initialCharacters}:GrillaPersonajesProps) => {

    const {isLoading, isError}= useAppSelector(state => state.character);

    return <div className="grilla-personajes">
     
     {isLoading ? <p> Cargando...</p> :
                initialCharacters.map(character =>
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