---
inject: true
to: app/redux/Store.ts
before:     // auto-plugin
---
    <%= h.changeCase.pascalCase(name) %>State: <%= h.changeCase.pascalCase(name) %>Reducer,