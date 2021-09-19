---
inject: true
to: app/services/<%= into %>.ts
before:   // auto-method
---

  <%= h.changeCase.camelCase(name) %> = (): Promise<APIResponse<true>> => {
    return axios({
      url: `/<%= h.changeCase.camelCase(name) %>`,
      method: 'GET',
    })
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  }