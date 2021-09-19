---
inject: true
to: app/navigation/HomeStack.tsx
before:     // auto-plugin
---
    <%= h.changeCase.pascalCase(name) %>: {
      screen: <%= h.changeCase.pascalCase(name) %>Screen,
    },