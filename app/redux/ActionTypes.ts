


/**
 * Action type
 */

enum ActionTypes {
  /** Initial  */
  INITIAL_DATA = 'INITIAL_DATA',
  APP_DATA_LOADED = 'APP_DATA_LOADED',

  /** Logout  */
  LOGOUT = 'LOGOUT',
  LOGIN = 'LOGIN',

  /** Auth  */
  AUTH_INIT = 'AUTH_INIT',
  AUTH_CHANGE = 'AUTH_CHANGE',

  /** User  */
  USER_INIT = 'USER_INIT',
  USER_CHANGE = 'USER_CHANGE',

  // auto-plugin
}

export interface IAction<T> {
  type: ActionTypes
  payload?: T
}

export default ActionTypes
