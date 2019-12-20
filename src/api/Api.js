import * as axios from 'axios'

export const fetchPlanets = async () => {
    let response = await axios({
        url: "http://www.mocky.io/v2/5df8d2fe3000000f02889f82",
        method: "get",
    })
    return response.data;
}

export const SearchContentApi = async (spaceBody, currentPage = 1) => {
    let response = await axios({
        url: `https://images-api.nasa.gov/search?page=${currentPage}&q=${spaceBody}`,
        method: "get",
    })
    return response.data;
}
