const { fetchData } = require('../api/index.js');
const { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } = require('../constants/actionTypes');

export const getData = () => async (dispatch) => {
    try {
        console.log("data");

        const data = await fetchData();
        console.log(data);

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};





