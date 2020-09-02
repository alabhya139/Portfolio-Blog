import {
    GET_CAPSULE_LIST,
    GET_CAPSULE_LIST_SUCCESS,
    GET_CAPSULE_LIST_ERROR,
    GET_CAPSULE_DETAILS,
    GET_CAPSULE_DETAILS_SUCCESS,
    GET_CAPSULE_DETAILS_ERROR,
    GET_UPCOMING_CAPSULE_LIST,
    GET_UPCOMING_CAPSULE_LIST_SUCCESS,
    GET_UPCOMING_CAPSULE_LIST_ERROR,
    GET_PAST_CAPSULE_LIST,
    GET_PAST_CAPSULE_LIST_SUCCESS,
    GET_PAST_CAPSULE_LIST_ERROR
} from './actionTypes';

export const getCapsuleList = (filter, cb) => ({
    type: GET_CAPSULE_LIST,
    filter,
    cb
});
export const getCapsuleListSuccess = (data) => ({
    type: GET_CAPSULE_LIST_SUCCESS,
    data: data
});

export const getCapsuleListError = (error) => ({
    type: GET_CAPSULE_LIST_ERROR,
    error: error
});

export const getCapsuleDetail = (filter, cb) => ({
    type: GET_CAPSULE_DETAILS,
    filter,
    cb
});
export const getCapsuleDetailSuccess = (data) => ({
    type: GET_CAPSULE_DETAILS_SUCCESS,
    data: data
});

export const getCapsuleDetailError = (error) => ({
    type: GET_CAPSULE_DETAILS_ERROR,
    error: error
});

export const getUpcomingCapsuleList = (filter, cb) => ({
    type: GET_UPCOMING_CAPSULE_LIST,
    filter,
    cb
});
export const getUpcomingCapsuleListSuccess = (data) => ({
    type: GET_UPCOMING_CAPSULE_LIST_SUCCESS,
    data: data
});

export const getUpcomingCapsuleListError = (error) => ({
    type: GET_UPCOMING_CAPSULE_LIST_ERROR,
    error: error
});

export const getPastCapsuleList = (filter, cb) => ({
    type: GET_PAST_CAPSULE_LIST,
    filter,
    cb
});
export const getPastCapsuleListSuccess = (data) => ({
    type: GET_PAST_CAPSULE_LIST_SUCCESS,
    data: data
});

export const getPastCapsuleListError = (error) => ({
    type: GET_PAST_CAPSULE_LIST_ERROR,
    error: error
});
