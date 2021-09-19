---
inject: true
to: app/redux/ActionTypes.ts
before:   // auto-plugin
---

  /** <%= h.changeCase.sentenceCase(name) %>  */
  <%= h.changeCase.constantCase(name) %>_INIT = '<%= h.changeCase.constantCase(name) %>_INIT',
  <%= h.changeCase.constantCase(name) %>_CHANGE = '<%= h.changeCase.constantCase(name) %>_CHANGE',