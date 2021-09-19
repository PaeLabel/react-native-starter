---
inject: true
to: app/redux/Actions/<%= into %>.ts
before:   // auto-interface
---
  <%= h.changeCase.camelCase(name) %>: () => void