import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_CORE_LIST,
    GET_CORE_DETAILS
} from '../actions/actionTypes';
import {
    getCoreListSuccess,
    getCoreListError,
    getCoreDetailSuccess,
    getCoreDetailError
} from '../actions/cores.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getCoreList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getCoreListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getCoreListError(error))
    }
}

export function* coreWatcher() {
    yield takeEvery(GET_CORE_LIST, getCoreList);
}
