import './filtros.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_CHARACTERS } from '../../store/slices/character/characterSlice';
const Filtros = () => {

    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        dispatch(FILTER_CHARACTERS(value));
    }


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre"
        value={searchValue} 
        onChange={handleSearch}
        />
    </div>
}

export default Filtros;