import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_LAUNCH_PADS_LIST,
    GET_LAUNCH_PADS_DETAILS
} from '../actions/actionTypes';
import {
    getLaunchPadsListSuccess,
    getLaunchPadsListError,
    getLaunchPadsDetailSuccess,
    getLaunchPadsDetailError
} from '../actions/launchPads.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getLaunchPadsList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getLaunchPadsListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getLaunchPadsListError(error))
    }
}

export function* launchPadsWatcher() {
    yield takeEvery(GET_LAUNCH_PADS_LIST, getLaunchPadsList);
}
