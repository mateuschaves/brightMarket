import {NavigationActions, StackActions} from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function push(routeName, params) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

function navigate(routeName, params, action) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
    }),
  );
}

function replace(routeName, params) {
  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}

function popToTop() {
  navigator.dispatch(StackActions.popToTop());
}

function reset(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

function back() {
  navigator.dispatch(NavigationActions.back());
}

function setParams(route, params) {
  navigator.dispatch(
    NavigationActions.setParams({
      params,
      key: route,
    }),
  );
}
// add other navigation functions that you need and export them

export default {
  push,
  navigate,
  replace,
  popToTop,
  reset,
  back,
  setTopLevelNavigator,
  setParams,
};
