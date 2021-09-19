import {
  NavigationActions,
  NavigationParams,
  NavigationRoute,
  StackActions,
} from 'react-navigation'

// @ts-ignore
let _navigator: NavigationActions

function setTopLevelNavigator(navigatorRef: Object) {
  _navigator = navigatorRef
}

function navigate(routeName: string, params?: NavigationParams) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  )
}

function replace(routeName: string, params?: any) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  )
}

function reset(routeName: string, params?: NavigationParams) {
  const resetAction = StackActions.reset({
    index: 0, // Reset nav stack
    actions: [
      NavigationActions.navigate({
        routeName: 'AllAppStack', // Call stack
        action: NavigationActions.navigate({
          routeName, // Navigate to this screen
          params,
        }),
      }),
    ],
    key: null,
  })

  _navigator.dispatch(resetAction)
}

function navigateDeep(
  actions: {routeName: string; params?: NavigationParams}[],
) {
  _navigator.dispatch(
    actions.reduceRight(
      (prevAction, action): any =>
        NavigationActions.navigate({
          routeName: action.routeName,
          params: action.params,
          action: prevAction,
        }),
      undefined,
    ),
  )
}

function getCurrentRoute(): NavigationRoute | null {
  if (!_navigator || !_navigator.state.nav) {
    return null
  }

  return _navigator.state.nav.routes[_navigator.state.nav.index] || null
}

function pop() {
  _navigator.dispatch(NavigationActions.back())
}

// add other navigation functions that you need and export them

export default {
  navigate,
  pop,
  replace,
  reset,
  setTopLevelNavigator,
  getCurrentRoute,
}
