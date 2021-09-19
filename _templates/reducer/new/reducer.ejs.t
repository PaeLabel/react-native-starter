---
to: app/redux/Reducers/<%= h.changeCase.pascalCase(name) %>Reducer.ts
---
import ActionTypes, {IAction} from '../ActionTypes'
import {<%= h.changeCase.pascalCase(name) %>StateDTO} from '../../dtos/<%= h.changeCase.pascalCase(name) %>DTO'

export const initialState: <%= h.changeCase.pascalCase(name) %>StateDTO = {
<% if(locals.stateKey){ -%>
  <%= h.changeCase.camelCase(stateKey) %>: {
    data: {},
    isLoading: false,
    errors: [],
  },
<% } else { -%>
  <%= h.changeCase.camelCase(name) %>: {
    data: {},
    isLoading: false,
    errors: [],
  },
<% } -%>
}

const <%= h.changeCase.pascalCase(name) %>Reducer = (
  state: <%= h.changeCase.pascalCase(name) %>StateDTO = initialState,
  actions: IAction<<%= h.changeCase.pascalCase(name) %>StateDTO>,
) => {
  switch (actions.type) {
    case ActionTypes.<%= h.changeCase.constantCase(actionType) %>_INIT: {
      return {
        ...initialState,
        ...actions.payload,
      }
    }
    case ActionTypes.<%= h.changeCase.constantCase(actionType) %>_CHANGE: {
      return {
        ...state,
        ...actions.payload,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default <%= h.changeCase.pascalCase(name) %>Reducer
