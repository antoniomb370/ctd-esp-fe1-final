import { ICharacter } from "../../store/slices/character/interfaceChararter";

export interface ITarjetaPersonaje {
    nombre: string;
    UrlImagen: string;
    esFavorito: boolean;
}

export interface  IGrillaPersonajesProps {
    initialCharacters: ICharacter[];

}