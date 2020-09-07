import {
    GET_SHIPS_LIST,
    GET_SHIPS_LIST_SUCCESS,
    GET_SHIPS_LIST_ERROR
}from './action.types';

export const getShipsList = (filter, cb) => ({
    type: GET_SHIPS_LIST,
    filter,
    cb
});
export const getShipsListSuccess = (data) => ({
    type: GET_SHIPS_LIST_SUCCESS,
    data: data
});

export const getShipsListError = (error) => ({
    type: GET_SHIPS_LIST_ERROR,
    error: error
});