import {
    GET_LAUNCH_PADS_LIST,
    GET_LAUNCH_PADS_LIST_SUCCESS,
    GET_LAUNCH_PADS_LIST_ERROR,
    GET_LAUNCH_PADS_DETAILS,
    GET_LAUNCH_PADS_DETAILS_SUCCESS,
    GET_LAUNCH_PADS_DETAILS_ERROR
} from './actionTypes';

export const getLaunchPadsList = (filter, cb) => ({
    type: GET_LAUNCH_PADS_LIST,
    filter,
    cb
});
export const getLaunchPadsListSuccess = (data) => ({
    type: GET_LAUNCH_PADS_LIST_SUCCESS,
    data: data
});

export const getLaunchPadsListError = (error) => ({
    type: GET_LAUNCH_PADS_LIST_ERROR,
    error: error
});

export const getLaunchPadsDetail = (filter, cb) => ({
    type: GET_LAUNCH_PADS_DETAILS,
    filter,
    cb
});
export const getLaunchPadsDetailSuccess = (data) => ({
    type: GET_LAUNCH_PADS_DETAILS_SUCCESS,
    data: data
});

export const getLaunchPadsDetailError = (error) => ({
    type: GET_LAUNCH_PADS_DETAILS_ERROR,
    error: error
});