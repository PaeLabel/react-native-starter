---
inject: true
to: app/services/<%= into %>.ts
before:   // auto-interface
---
  <%= h.changeCase.camelCase(name) %>: () => Promise<APIResponse<true/* <-- Please change api response dto here  */>>