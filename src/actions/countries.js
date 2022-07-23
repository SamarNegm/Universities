const { fetchData } = require('../api/index.js');
const { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, LOAD_USERS_LOADING, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } = require('../constants/actionTypes');

export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USERS_LOADING });
        const data = await fetchData();
        console.log(data, " data");
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: LOAD_USERS_SUCCESS, data })
    } catch (error) {
        console.log(error);
        dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
    }
};





