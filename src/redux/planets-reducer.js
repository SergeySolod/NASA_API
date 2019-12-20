import {fetchPlanets} from "../api/Api";

const SET_PLANETS = 'NasaApi/planets-reducer/SET_PLANETS';
const TOGGLE_IS_FETCHING_PLANETS = 'NasaApi/planets-reducer/TOGGLE_IS_FETCHING_PLANETS';

let initialState = {
    planets: [],
    isFetching: true
}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANETS: {
            return {...state, planets: [...action.planets]}
        }
        case TOGGLE_IS_FETCHING_PLANETS: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

const setPlanets = (planets) => ({type: SET_PLANETS, planets})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_PLANETS, isFetching});

export const fetchPlanetsTC = (dispatch) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await fetchPlanets();
        dispatch(toggleIsFetching(false));
        dispatch(setPlanets(data.data));
    }
}

export default planetsReducer

export const getPlanets = (state) => {
    return state.planets.planets
}

export const getIsFetching = (state) => {
    return state.planets.isFetching
}
