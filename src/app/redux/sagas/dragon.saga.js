import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_DRAGON_LIST,
    GET_DRAGON_DETAILS
} from '../actions/actionTypes';
import {
    getDragonListSuccess,
    getDragonListError,
    getDragonDetailSuccess,
    getDragonDetailError
} from '../actions/dragon.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getCapsuleList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getDragonListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getDragonListError(error))
    }
}

export function* dragonWatcher() {
    yield takeEvery(GET_DRAGON_LIST, getCapsuleList);
}
