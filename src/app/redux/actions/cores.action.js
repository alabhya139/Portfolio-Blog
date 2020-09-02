import {
    GET_CORE_LIST,
    GET_CORE_LIST_SUCCESS,
    GET_CORE_LIST_ERROR,
    GET_CORE_DETAILS,
    GET_CORE_DETAILS_SUCCESS,
    GET_CORE_DETAILS_ERROR,
    GET_UPCOMING_CORE_LIST,
    GET_UPCOMING_CORE_LIST_SUCCESS,
    GET_UPCOMING_CORE_LIST_ERROR,
    GET_PAST_CORE_LIST,
    GET_PAST_CORE_LIST_SUCCESS,
    GET_PAST_CORE_LIST_ERROR
} from './actionTypes';

export const getCoreList = (filter, cb) => ({
    type: GET_CORE_LIST,
    filter,
    cb
});
export const getCoreListSuccess = (data) => ({
    type: GET_CORE_LIST_SUCCESS,
    data: data
});

export const getCoreListError = (error) => ({
    type: GET_CORE_LIST_ERROR,
    error: error
});

export const getCoreDetail = (filter, cb) => ({
    type: GET_CORE_DETAILS,
    filter,
    cb
});
export const getCoreDetailSuccess = (data) => ({
    type: GET_CORE_DETAILS_SUCCESS,
    data: data
});

export const getCoreDetailError = (error) => ({
    type: GET_CORE_DETAILS_ERROR,
    error: error
});

export const getUpcomingCoreList = (filter, cb) => ({
    type: GET_UPCOMING_CORE_LIST,
    filter,
    cb
});
export const getUpcomingCoreListSuccess = (data) => ({
    type: GET_UPCOMING_CORE_LIST_SUCCESS,
    data: data
});

export const getUpcomingCoreListError = (error) => ({
    type: GET_UPCOMING_CORE_LIST_ERROR,
    error: error
});

export const getPastCoreList = (filter, cb) => ({
    type: GET_PAST_CORE_LIST,
    filter,
    cb
});
export const getPastCoreListSuccess = (data) => ({
    type: GET_PAST_CORE_LIST_SUCCESS,
    data: data
});

export const getPastCoreListError = (error) => ({
    type: GET_PAST_CORE_LIST_ERROR,
    error: error
});
