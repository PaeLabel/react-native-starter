---
inject: true
to: app/redux/Store.ts
before:   // auto-import
---
import <%= h.changeCase.pascalCase(name) %>Reducer, { initialState as <%= h.changeCase.pascalCase(name) %>State } from './Reducers/<%= h.changeCase.pascalCase(name) %>Reducer'