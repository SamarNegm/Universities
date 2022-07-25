const { FETCH_ALL, CREATE, UPDATE, DELETE, LOAD_UNIVERSITES_LOADING, LOAD_UNIVERSITES_SUCCESS, LOAD_UNIVERSITES_ERROR } = require('../constants/actionTypes');
const initialState = {
    data: [],
    loading: true,
    error: ''
};

export default (state = initialState, action) => {
    console.log(action.type, state);
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
        case CREATE:
            return [...state, action.data];
        case UPDATE:
            return [...state, action.data];
        case DELETE:
            console.log(action.data);
            return state.data;
        default:
            console.log("defult ", state);
            return state;
    }
};

