import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_ROCKET_LIST,
    GET_ROCKET_DETAILS
} from '../actions/actionTypes';
import {
    getRocketListSuccess,
    getRocketListError,
    getRocketDetailSuccess,
    getRocketDetailError
} from '../actions/rocket.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getRocketList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getRocketListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getRocketListError(error))
    }
}

export function* rocketWatcher() {
    yield takeEvery(GET_ROCKET_LIST, getRocketList);
}
