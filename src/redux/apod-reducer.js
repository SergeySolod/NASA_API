import {SearchApod} from "../api/Api";

const SET_APOD = 'NasaApi/apod-reducer/SET_APOD';

let initialState = {
    apod: []
}

const reducerApod = (state = initialState, action) => {
    switch (action.type) {
        case SET_APOD: {
            return {...state, apod: action.apod}
        }
        default:
            return state;
    }
}

const setApod = (apod) => ({type: SET_APOD, apod})

export const fetchApod = (dispatch) => {
    return async (dispatch) => {
        let data = await SearchApod();
        dispatch(setApod(data));
    }
}

export default reducerApod
