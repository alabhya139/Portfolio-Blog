import {
    GET_CAPSULE_LIST,
    GET_CAPSULE_LIST_SUCCESS,
    GET_CAPSULE_LIST_ERROR
}from '../actions/actionTypes';

const initialState = {
    capsuleList: [],
    isLoading: false,
    error: false
}
export default function (state = initialState, action) {
    switch(action.type){
        case GET_CAPSULE_LIST:{
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }
        case GET_CAPSULE_LIST_SUCCESS:{
            return {
                ...state,
                capsuleList: action.data,
                isLoading: false,
                error: false
            }
        }
        case GET_CAPSULE_LIST_ERROR:{
            return {
                ...state,
                isLoading: false,
                error: true
            }
        }
        default: return state;
    }
}