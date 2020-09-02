import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_LAUNCHES_LIST,
    GET_LAUNCHES_DETAILS
} from '../actions/actionTypes';
import {
    getLaunchesListSuccess,
    getLaunchesListError,
    getLaunchesDetailSuccess,
    getLaunchesDetailError
} from '../actions/launches.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getLaunchesList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getLaunchesListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getLaunchesListError(error))
    }
}

export function* launchesWatcher() {
    yield takeEvery(GET_LAUNCHES_LIST, getLaunchesList);
}
