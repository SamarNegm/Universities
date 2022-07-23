const { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, LOAD_UNIVERSITES_LOADING, LOAD_UNIVERSITES_SUCCESS, LOAD_UNIVERSITES_ERROR } = require('../constants/actionTypes');
const initialState = {
    data: [],
    loading: true,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_UNIVERSITES_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_UNIVERSITES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
                error: ''

            }
        }
        case LOAD_UNIVERSITES_ERROR: {
            console.log("Errorr LOAD_UNIVERSITES_ERROR")
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        case FETCH_ALL:
            return {
                ...state,
                data: action.data,
                loading: false,
                error: ''

            }
        // case CREATE:
        //     return [...state, action.payload];
        // case UPDATE:
        //     return state.map((data) => (data._id === action.payload._id ? action.payload : data));
        case DELETE:
            return state.data.splice(action.payload, 1);
        default:
            return state;
    }
};

