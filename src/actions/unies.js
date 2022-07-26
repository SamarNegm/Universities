const { fetchData, RemoveItem, UpdateItem, CreateItem } = require('../api/index.js');
const { FETCH_ALL, CREATE, UPDATE, DELETE, LOAD_UNIVERSITES_LOADING, LOAD_UNIVERSITES_SUCCESS, LOAD_UNIVERSITES_ERROR } = require('../constants/actionTypes');

export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_UNIVERSITES_LOADING });
        const data = await fetchData();
        console.log(data, " data");
        dispatch({ type: FETCH_ALL, data: data });
        dispatch({ type: LOAD_UNIVERSITES_SUCCESS, data })
    } catch (error) {
        console.log(error);
        dispatch({ type: LOAD_UNIVERSITES_ERROR, error: error.message || 'Unexpected Error!!!' })
    }
};
export const removeData = (index) => async (dispatch) => {
    try {
        console.log("Remove Data");
        dispatch({ type: LOAD_UNIVERSITES_LOADING });
        const data = await RemoveItem(index);
        console.log(data, " data");
        dispatch({ type: DELETE, data: data });
        dispatch({ type: LOAD_UNIVERSITES_SUCCESS, data: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: LOAD_UNIVERSITES_ERROR, error: error.message || 'Unexpected Error!!!' })
    }
}



export const updateUni = (index, uni) => async (dispatch) => {

    try {
        const data = await UpdateItem(index, uni);
        dispatch({ type: UPDATE, data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: LOAD_UNIVERSITES_ERROR, error: error.message || 'Unexpected Error!!!' })
    }
}
export const createUni = (uni) => async (dispatch) => {

    try {

        const data = await CreateItem(uni);
        dispatch({ type: CREATE, data: data });

    } catch (error) {
        console.log(error);
        dispatch({ type: LOAD_UNIVERSITES_ERROR, error: error.message || 'Unexpected Error!!!' })
    }
}