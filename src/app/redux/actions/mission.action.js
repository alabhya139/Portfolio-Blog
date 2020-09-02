import {
    GET_MISSION_LIST,
    GET_MISSION_LIST_SUCCESS,
    GET_MISSION_LIST_ERROR,
    GET_MISSION_DETAILS,
    GET_MISSION_DETAILS_SUCCESS,
    GET_MISSION_DETAILS_ERROR
}from './actionTypes';

export const getMissionList = (filter, cb) => ({
    type: GET_MISSION_LIST,
    filter,
    cb
});
export const getMissionListSuccess = (data) => ({
    type: GET_MISSION_LIST_SUCCESS,
    data: data
});

export const getMissionListError = (error) => ({
    type: GET_MISSION_LIST_ERROR,
    error: error
});

export const getMissionDetail = (filter, cb) => ({
    type: GET_MISSION_DETAILS,
    filter,
    cb
});
export const getMissionDetailSuccess = (data) => ({
    type: GET_MISSION_DETAILS_SUCCESS,
    data: data
});

export const getMissionDetailError = (error) => ({
    type: GET_MISSION_DETAILS_ERROR,
    error: error
});