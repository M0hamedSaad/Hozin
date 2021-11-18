import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';
import { I18nManager } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userState', 'skipBoardingState', 'registerUserState'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
// console.log('store:', store.getState());
const persistor = persistStore(store);
export { store, persistor };
