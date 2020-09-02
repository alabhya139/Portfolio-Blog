import {
    GET_ROCKET_LIST,
    GET_ROCKET_LIST_SUCCESS,
    GET_ROCKET_LIST_ERROR,
    GET_ROCKET_DETAILS,
    GET_ROCKET_DETAILS_SUCCESS,
    GET_ROCKET_DETAILS_ERROR
}from './actionTypes';

export const getRocketList = (filter, cb) => ({
    type: GET_ROCKET_LIST,
    filter,
    cb
});
export const getRocketListSuccess = (data) => ({
    type: GET_ROCKET_LIST_SUCCESS,
    data: data
});

export const getRocketListError = (error) => ({
    type: GET_ROCKET_LIST_ERROR,
    error: error
});

export const getRocketDetail = (filter, cb) => ({
    type: GET_ROCKET_DETAILS,
    filter,
    cb
});
export const getRocketDetailSuccess = (data) => ({
    type: GET_ROCKET_DETAILS_SUCCESS,
    data: data
});

export const getRocketDetailError = (error) => ({
    type: GET_ROCKET_DETAILS_ERROR,
    error: error
});