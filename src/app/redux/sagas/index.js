import { all } from 'redux-saga/effects';
import { shipsWatcher } from './ships.saga';

export default function* rootSaga() {
    yield all([
        shipsWatcher()
    ])
}