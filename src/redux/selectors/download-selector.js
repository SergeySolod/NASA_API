export const getImages = (state) => {
    return state.download.images
}

export const getSearchSuccess = (state) => {
    return state.download.searchSuccess
}

export const getchangeObject = (state) => {
    return state.download.object
}

export const getTotalCount = (state) => {
    return state.download.totalCount
}

export const getCurrentPage = (state) => {
    return state.download.currentPage
}

export const getIsFetching = (state) => {
    return state.download.isFetching
}