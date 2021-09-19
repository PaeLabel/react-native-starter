---
inject: true
to: app/redux/Store.ts
before:  // auto-state-type
---
  <%= h.changeCase.pascalCase(name) %>State: typeof <%= h.changeCase.pascalCase(name) %>State