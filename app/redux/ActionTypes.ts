/**
 * Action type
 */

enum ActionTypes {
  /** Initial  */
  INITIAL_DATA = 'INITIAL_DATA',

  /** Logout  */
  LOGOUT = 'LOGOUT',

  /** Auth  */
  AUTH_INIT = 'AUTH_INIT',
  AUTH_CHANGE = 'AUTH_CHANGE',
  // auto-plugin
}

export interface IAction<T> {
  type: ActionTypes
  payload?: T
}

export default ActionTypes
