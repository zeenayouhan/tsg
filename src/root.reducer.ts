import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commonReducer from './common/reducers/common.reducer';
const CommonPersistConfig = {
  storage: storage,
  key: 'common',
};
export default combineReducers({
  common: persistReducer(CommonPersistConfig, commonReducer),
});
