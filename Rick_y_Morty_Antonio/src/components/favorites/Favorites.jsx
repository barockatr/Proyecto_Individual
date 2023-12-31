import { connect } from 'react-redux';
import Card from '../card/Card.jsx'

function Favorites({myFavorites, onClose}) {
    
    return (
        <div>
            {
                myFavorites.map((character,index) => (
                   <Card
                    id={character.id}
                    key={index}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin.name}
                    image={character.image}
                    onClose={() => onclose(character.id)}
                    />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);