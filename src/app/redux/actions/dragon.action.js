import {
    GET_DRAGON_LIST,
    GET_DRAGON_LIST_SUCCESS,
    GET_DRAGON_LIST_ERROR,
    GET_DRAGON_DETAILS,
    GET_DRAGON_DETAILS_SUCCESS,
    GET_DRAGON_DETAILS_ERROR
}from './actionTypes';

export const getDragonList = (filter, cb) => ({
    type: GET_DRAGON_LIST,
    filter,
    cb
});
export const getDragonListSuccess = (data) => ({
    type: GET_DRAGON_LIST_SUCCESS,
    data: data
});

export const getDragonListError = (error) => ({
    type: GET_DRAGON_LIST_ERROR,
    error: error
});

export const getDragonDetail = (filter, cb) => ({
    type: GET_DRAGON_DETAILS,
    filter,
    cb
});
export const getDragonDetailSuccess = (data) => ({
    type: GET_DRAGON_DETAILS_SUCCESS,
    data: data
});

export const getDragonDetailError = (error) => ({
    type: GET_DRAGON_DETAILS_ERROR,
    error: error
});