import {SearchContentApi} from "../api/Api";

const SET_CONTENT = 'NasaApi/search-reducer/SET_CONTENT';
const SET_SUCCESS = 'NasaApi/search-reducer/SET_SUCCESS';
const CHANGE_OBJECT = 'NasaApi/search-reducer/CHANGE_OBJECT';
const SET_TOTAL_COUNT = 'NasaApi/search-reducer/SET_TOTAL_COUNT';
const CHANGE_CURRENT_PAGE = 'NasaApi/search-reducer/CHANGE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'NasaApi/search-reducer/TOGGLE_IS_FETCHING';
const DELETE_INFORMATION = 'NasaApi/search-reducer/DELETE_INFORMATION';

let initialState = {
    images: [],
    object: '',
    searchSuccess: false,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
}

const downloadReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENT: {
            return {...state, images: action.content}
        }
        case SET_SUCCESS: {
            return {...state, searchSuccess: action.searchSuccess}
        }
        case CHANGE_OBJECT: {
            return {...state, object: action.spaceBody}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case CHANGE_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case DELETE_INFORMATION: {
            return {...state, images: []}
        }
        default:
            return state;
    }
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const SearchContentSuccess = (content) => ({type: SET_CONTENT, content});
const ChangeObject = (spaceBody) => ({type: CHANGE_OBJECT, spaceBody});
const SetTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
const deleteInformation = () => ({type: DELETE_INFORMATION});

export const ChangeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const SearchSuccess = (searchSuccess) => ({type: SET_SUCCESS, searchSuccess});


export const SearchContent = (spaceBody, currentPage) => async (dispatch) => {
    dispatch(deleteInformation());
    dispatch(toggleIsFetching(true));
    dispatch(ChangeObject(spaceBody));
    let response = await SearchContentApi(spaceBody, currentPage);
    let contentSuccess = response.collection.items;
    let totalCount = response.collection.metadata.total_hits;
    dispatch(SetTotalCount(totalCount));
    dispatch(SearchContentSuccess(contentSuccess));
    dispatch(toggleIsFetching(false));
    dispatch(SearchSuccess(true));
}


export default downloadReducer;