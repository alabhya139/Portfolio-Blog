import {
    GET_HISTORY_LIST,
    GET_HISTORY_LIST_SUCCESS,
    GET_HISTORY_LIST_ERROR,
    GET_HISTORY_DETAILS,
    GET_HISTORY_DETAILS_SUCCESS,
    GET_HISTORY_DETAILS_ERROR
}from './actionTypes';

export const getHistoryList = (filter, cb) => ({
    type: GET_HISTORY_LIST,
    filter,
    cb
});
export const getHistoryListSuccess = (data) => ({
    type: GET_HISTORY_LIST_SUCCESS,
    data: data
});

export const getHistoryListError = (error) => ({
    type: GET_HISTORY_LIST_ERROR,
    error: error
});

export const getHistoryDetail = (filter, cb) => ({
    type: GET_HISTORY_DETAILS,
    filter,
    cb
});
export const getHistoryDetailSuccess = (data) => ({
    type: GET_HISTORY_DETAILS_SUCCESS,
    data: data
});

export const getHistoryDetailError = (error) => ({
    type: GET_HISTORY_DETAILS_ERROR,
    error: error
});