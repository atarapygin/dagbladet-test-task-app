import { fetchData } from '../actions';

const initialState = {
    data: [],
    loading: true,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchData.request.getType():
            return {
                ...state,
                loading: true,
            };
        case fetchData.ok.getType():
            return {
                ...state,
                loading: false,
                data: action.payload.response[0],
            };
        case fetchData.error.getType():
            return {
                ...state,
                loading: false,
                data: [],
                error: true,
            }
        default:
            return state
    }
}

export default reducer;