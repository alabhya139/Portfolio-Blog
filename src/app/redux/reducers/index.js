import { combineReducers } from 'redux';

import UiReducer from './ui.reducer';
import Capsules from './capsule.reducer';

const rootReducer = combineReducers({
    UiReducer,
    Capsules
});

export default rootReducer;