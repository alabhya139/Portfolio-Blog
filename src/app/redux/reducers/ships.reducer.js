import {
} from '../actions/action.types';


const initialState = {
    isLoading: false,
    error: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        default: return state;
    }
}