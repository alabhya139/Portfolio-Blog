import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_PAYLOAD_LIST,
    GET_PAYLOAD_DETAILS
} from '../actions/actionTypes';
import {
    getPayloadListSuccess,
    getPayloadListError,
    getPayloadDetailSuccess,
    getPayloadDetailError
} from '../actions/payload.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getPayloadList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getPayloadListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getPayloadListError(error))
    }
}

export function* payloadWatcher() {
    yield takeEvery(GET_PAYLOAD_LIST, getPayloadList);
}
