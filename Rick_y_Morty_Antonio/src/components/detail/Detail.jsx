import axios from "axios";
import { useState, useEffect }  from "react";
import { useParams} from "react-router-dom";

export default function Detail(props) {
    
    const { id } = useParams();

    const [character, setCharacters ] = useState({});

    useEffect(() => {
        axios('https://rickandmortyapi.com/api/character/${id}')
        .then(({ data }) => {
            if (data.name) {
                setCharacters(data);
            } else {
                window.alert('No hay personajes con ese id');
            }
        });
        return setCharacters({});
    }, [id]);
    console.log(character);
    
    return(
        <div>
            <h1>Detail</h1>
            <h2>Name: {character?.name}</h2>
            <h3>Id: {character?.id}</h3>
            <h3>Status: {character?.status}</h3>
            <h3>Specie: {character?.species}</h3>
            <h3>Gender: {character?.gender}</h3>
            <h3>Origin: {character?.origin?.name}</h3>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}
