import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { ITarjetaPersonaje } from './grilla-personajes.componente';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({nombre, UrlImagen, esFavorito}: ITarjetaPersonaje) => {
  return <div className="tarjeta-personaje">
  <img src={UrlImagen} alt={nombre}/>
  <div className="tarjeta-personaje-body">
      <span>{nombre}</span>
      <BotonFavorito esFavorito={esFavorito} />
  </div>
</div>
}

export default TarjetaPersonaje;