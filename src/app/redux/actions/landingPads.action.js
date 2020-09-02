import {
    GET_LANDING_PADS_LIST,
    GET_LANDING_PADS_LIST_SUCCESS,
    GET_LANDING_PADS_LIST_ERROR,
    GET_LANDING_PADS_DETAILS,
    GET_LANDING_PADS_DETAILS_SUCCESS,
    GET_LANDING_PADS_DETAILS_ERROR
} from './actionTypes';

export const getLandingPadsList = (filter, cb) => ({
    type: GET_LANDING_PADS_LIST,
    filter,
    cb
});
export const getLandingPadsListSuccess = (data) => ({
    type: GET_LANDING_PADS_LIST_SUCCESS,
    data: data
});

export const getLandingPadsListError = (error) => ({
    type: GET_LANDING_PADS_LIST_ERROR,
    error: error
});

export const getLandingPadsDetail = (filter, cb) => ({
    type: GET_LANDING_PADS_DETAILS,
    filter,
    cb
});
export const getLandingPadsDetailSuccess = (data) => ({
    type: GET_LANDING_PADS_DETAILS_SUCCESS,
    data: data
});

export const getLandingPadsDetailError = (error) => ({
    type: GET_LANDING_PADS_DETAILS_ERROR,
    error: error
});