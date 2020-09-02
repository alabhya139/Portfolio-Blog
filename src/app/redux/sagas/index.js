import { all } from 'redux-saga/effects';
import { capsuleWatcher } from './capsule.saga';
import { coreWatcher } from './cores.saga';
import { dragonWatcher } from './dragon.saga';
import { historyWatcher } from './history.saga';
import { landingPadsWatcher } from './landingPads.saga';
import { launchesWatcher } from './launches.saga';
import { launchPadsWatcher } from './launchPads.saga';
import { missionWatcher } from './mission.saga';
import { payloadWatcher } from './payload.saga';
import { roadsterWatcher } from './roadster.saga';
import { rocketWatcher } from './rocket.saga';
import { shipsWatcher } from './ships.saga';

export default function* rootSaga() {
    yield all([
        capsuleWatcher(),
        coreWatcher(),
        dragonWatcher(),
        historyWatcher(),
        landingPadsWatcher(),
        launchPadsWatcher(),
        launchesWatcher(),
        missionWatcher(),
        payloadWatcher(),
        roadsterWatcher(),
        rocketWatcher(),
        shipsWatcher()
    ])
}