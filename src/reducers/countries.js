const { FETCH_ALL, CREATE, UPDATE, DELETE } = require('../constants/actionTypes');

export default (countries = [], action) => {
    console.log("countries reducers action type");
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...countries, action.payload];
        case UPDATE:
            return countries.map((data) => (data._id === action.payload._id ? action.payload : data));
        case DELETE:
            return countries.filter((data) => data._id !== action.payload);
        default:
            return countries;
    }
};

