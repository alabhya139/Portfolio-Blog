import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import { GET_CAPSULE_LIST} from '../actions/actionTypes';
import { } from '../actions/capsule.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getCapsuleList(param) {
    // const url = `${BASE_URL}capsules`;
    // try {
    //     const response = yield call(fetchData, url);
    //     yield put(getCapsuleListSuccess(response));
    //     if (param.cb && response[0])
    //         param.cb(response[0]);
    // } catch (error) {
    //     yield put(getIntentListError(error))
    // }
}

export function* roadsterWatcher() {
    yield takeEvery(GET_CAPSULE_LIST, getCapsuleList);
}
