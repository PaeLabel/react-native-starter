import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import thunk, { ThunkDispatch } from 'redux-thunk'
import axiosMiddleware from '../config/axiosMiddleware'
import ActionTypes, { IAction } from './ActionTypes'
import AuthReducer, { initialState as AuthState } from './Reducers/AuthReducer'
import ChallengeReducer, { initialState as ChallengeState } from './Reducers/ChallengeReducer'
import InitialAppReducer, {
  initialState as InitialAppState
} from './Reducers/InitialAppReducer'
import UserReducer, { initialState as UserState } from './Reducers/UserReducer'

// auto-import

const devToolOption = {
  name: 'FE_MB',
  instanceId: 1,
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthState', 'UserState'],
}

const initialAppPersistConfig = {
  key: 'InitialAppState',
  storage: AsyncStorage,
  whitelist: ['hasViewWalkThrough', 'isAppDataLoaded'],
}

export type RootState = {
  InitialAppState: typeof InitialAppState
  AuthState: typeof AuthState
  UserState: typeof UserState
  ChallengeState: typeof ChallengeState
  // auto-state-type
}

export type Dispatcher = ThunkDispatch<RootState, unknown, IAction<any>>

export type GetState = () => RootState

let _store: Store

export default function configureStore() {
  const composeDevToolsWithOption = composeWithDevTools(devToolOption)
  const composeEnhancers = (__DEV__ && composeDevToolsWithOption) || compose
  let rootReducer = combineReducers({
    InitialAppState: persistReducer(initialAppPersistConfig, InitialAppReducer),
    AuthState: AuthReducer,
    UserState: UserReducer,
    ChallengeState: ChallengeReducer,
    // auto-plugin
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const appReducer = (state: any, action: any) => {
    if (action.type === ActionTypes.LOGOUT) {
      AsyncStorage.removeItem('persist:root')
      state = undefined
    }
    return persistedReducer(state, action)
  }

  const middleware = [axiosMiddleware, thunk]
  if (__DEV__ && true) {
    middleware.push(logger)
  }
  const enhancer = composeEnhancers(applyMiddleware(...middleware))

  const store = createStore(appReducer, enhancer)
  const persistor = persistStore(store)
  _store = store
  return { store, persistor }
}

export const getReduxStore = () => _store
