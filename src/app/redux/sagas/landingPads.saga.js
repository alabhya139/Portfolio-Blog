import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_LANDING_PADS_LIST,
    GET_LANDING_PADS_DETAILS
} from '../actions/actionTypes';
import {
    getLandingPadsListSuccess,
    getLandingPadsListError,
    getLandingPadsDetailSuccess,
    getLandingPadsDetailError
} from '../actions/landingPads.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getLandingPadsList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getLandingPadsListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getLandingPadsListError(error))
    }
}

export function* landingPadsWatcher() {
    yield takeEvery(GET_LANDING_PADS_LIST, getLandingPadsList);
}
