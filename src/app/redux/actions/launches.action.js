import {
    GET_LAUNCHES_LIST,
    GET_LAUNCHES_LIST_SUCCESS,
    GET_LAUNCHES_LIST_ERROR,
    GET_LAUNCHES_DETAILS,
    GET_LAUNCHES_DETAILS_SUCCESS,
    GET_LAUNCHES_DETAILS_ERROR,
    GET_UPCOMING_LAUNCHES_LIST,
    GET_UPCOMING_LAUNCHES_LIST_SUCCESS,
    GET_UPCOMING_LAUNCHES_LIST_ERROR,
    GET_PAST_LAUNCHES_LIST,
    GET_PAST_LAUNCHES_LIST_SUCCESS,
    GET_PAST_LAUNCHES_LIST_ERROR,
    GET_NEXT_LAUNCHES_LIST,
    GET_NEXT_LAUNCHES_LIST_SUCCESS,
    GET_NEXT_LAUNCHES_LIST_ERROR,
    GET_LATEST_LAUNCHES_LIST,
    GET_LATEST_LAUNCHES_LIST_SUCCESS,
    GET_LATEST_LAUNCHES_LIST_ERROR

} from './actionTypes';

export const getLaunchesList = (filter, cb) => ({
    type: GET_LAUNCHES_LIST,
    filter,
    cb
});
export const getLaunchesListSuccess = (data) => ({
    type: GET_LAUNCHES_LIST_SUCCESS,
    data: data
});

export const getLaunchesListError = (error) => ({
    type: GET_LAUNCHES_LIST_ERROR,
    error: error
});

export const getLaunchesDetail = (filter, cb) => ({
    type: GET_LAUNCHES_DETAILS,
    filter,
    cb
});
export const getLaunchesDetailSuccess = (data) => ({
    type: GET_LAUNCHES_DETAILS_SUCCESS,
    data: data
});

export const getLaunchesDetailError = (error) => ({
    type: GET_LAUNCHES_DETAILS_ERROR,
    error: error
});

export const getUpcomingLaunchesList = (filter, cb) => ({
    type: GET_UPCOMING_LAUNCHES_LIST,
    filter,
    cb
});
export const getUpcomingLaunchesListSuccess = (data) => ({
    type: GET_UPCOMING_LAUNCHES_LIST_SUCCESS,
    data: data
});

export const getUpcomingLaunchesListError = (error) => ({
    type: GET_UPCOMING_LAUNCHES_LIST_ERROR,
    error: error
});

export const getPastLaunchesList = (filter, cb) => ({
    type: GET_PAST_LAUNCHES_LIST,
    filter,
    cb
});
export const getPastLaunchesListSuccess = (data) => ({
    type: GET_PAST_LAUNCHES_LIST_SUCCESS,
    data: data
});

export const getPastLaunchesListError = (error) => ({
    type: GET_PAST_LAUNCHES_LIST_ERROR,
    error: error
});

export const getNextLaunchesList = (filter, cb) => ({
    type: GET_NEXT_LAUNCHES_LIST,
    filter,
    cb
});
export const getNextLaunchesListSuccess = (data) => ({
    type: GET_NEXT_LAUNCHES_LIST_SUCCESS,
    data: data
});

export const getNextLaunchesListError = (error) => ({
    type: GET_NEXT_LAUNCHES_LIST_ERROR,
    error: error
});

export const getLatestLaunchesList = (filter, cb) => ({
    type: GET_LATEST_LAUNCHES_LIST,
    filter,
    cb
});
export const getLatestLaunchesListSuccess = (data) => ({
    type: GET_LATEST_LAUNCHES_LIST_SUCCESS,
    data: data
});

export const getLatestLaunchesListError = (error) => ({
    type: GET_LATEST_LAUNCHES_LIST_ERROR,
    error: error
})