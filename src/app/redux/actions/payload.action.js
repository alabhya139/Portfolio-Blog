import {
    GET_PAYLOAD_LIST,
    GET_PAYLOAD_LIST_SUCCESS,
    GET_PAYLOAD_LIST_ERROR,
    GET_PAYLOAD_DETAILS,
    GET_PAYLOAD_DETAILS_SUCCESS,
    GET_PAYLOAD_DETAILS_ERROR
}from './actionTypes';

export const getPayloadList = (filter, cb) => ({
    type: GET_PAYLOAD_LIST,
    filter,
    cb
});
export const getPayloadListSuccess = (data) => ({
    type: GET_PAYLOAD_LIST_SUCCESS,
    data: data
});

export const getPayloadListError = (error) => ({
    type: GET_PAYLOAD_LIST_ERROR,
    error: error
});

export const getPayloadDetail = (filter, cb) => ({
    type: GET_PAYLOAD_DETAILS,
    filter,
    cb
});
export const getPayloadDetailSuccess = (data) => ({
    type: GET_PAYLOAD_DETAILS_SUCCESS,
    data: data
});

export const getPayloadDetailError = (error) => ({
    type: GET_PAYLOAD_DETAILS_ERROR,
    error: error
});