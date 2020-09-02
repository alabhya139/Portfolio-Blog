import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_MISSION_LIST,
    GET_MISSION_DETAILS
} from '../actions/actionTypes';
import {
    getMissionListSuccess,
    getMissionListError,
    getMissionDetailSuccess,
    getMissionDetailError
} from '../actions/mission.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getMissionList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getMissionListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getMissionListError(error))
    }
}

export function* missionWatcher() {
    yield takeEvery(GET_MISSION_LIST, getMissionList);
}
