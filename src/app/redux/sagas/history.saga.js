import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_HISTORY_LIST,
    GET_HISTORY_DETAILS
} from '../actions/actionTypes';
import {
    getHistoryListSuccess,
    getHistoryListError,
    getHistoryDetailSuccess,
    getHistoryDetailError
} from '../actions/history.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getCapsuleList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getHistoryListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getHistoryListError(error))
    }
}

export function* historyWatcher() {
    yield takeEvery(GET_HISTORY_LIST, getCapsuleList);
}
