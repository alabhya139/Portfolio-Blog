import {
    GET_SHIPS_LIST,
    GET_SHIPS_LIST_SUCCESS,
    GET_SHIPS_LIST_ERROR,
    GET_SHIPS_DETAILS,
    GET_SHIPS_DETAILS_SUCCESS,
    GET_SHIPS_DETAILS_ERROR
}from './actionTypes';

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

export const getShipsDetail = (filter, cb) => ({
    type: GET_SHIPS_DETAILS,
    filter,
    cb
});
export const getShipsDetailSuccess = (data) => ({
    type: GET_SHIPS_DETAILS_SUCCESS,
    data: data
});

export const getShipsDetailError = (error) => ({
    type: GET_SHIPS_DETAILS_ERROR,
    error: error
});