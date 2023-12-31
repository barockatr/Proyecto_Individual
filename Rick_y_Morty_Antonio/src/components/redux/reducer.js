import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    user: ""
}

export default function reducer ( state = initialState, {type, payload}) {
    
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const filterededFavs = state.myFavorites.filter(fav => fav.id !== Number(payload))
            return {
                ...state,
                myFavorites: filterededFavs
            }
        default:
            return {...state}        
    }
}