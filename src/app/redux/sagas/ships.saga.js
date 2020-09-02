import { call, put } from 'redux-saga/effects';
import { takeEvery, select } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import history from '../../router/history';
import {
    GET_SHIPS_LIST,
    GET_SHIPS_DETAILS
} from '../actions/actionTypes';
import {
    getShipsListSuccess,
    getShipsListError,
    getShipsDetailSuccess,
    getShipsDetailError
} from '../actions/ships.action';
import { constants } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

const BASE_URL = constants.API.baseUrl;

export function* getShipsList(param) {
    const url = `${BASE_URL}capsules`;
    try {
        const response = yield call(fetchData, url);
        yield put(getShipsListSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(getShipsListError(error))
    }
}

export function* shipsWatcher() {
    yield takeEvery(GET_SHIPS_LIST, getShipsList);
}
