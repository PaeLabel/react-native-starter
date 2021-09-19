---
to: app/services/<%= h.changeCase.pascalCase(name) %>Service.ts
---
import axios from 'axios'
import {APIResponse} from '../dtos/Generic'

export interface I<%= h.changeCase.pascalCase(name) %>Service {
  get<%= h.changeCase.pascalCase(name) %>: () => Promise<APIResponse<true/* <-- Please change api response dto here  */>>
  // auto-interface
}

class <%= h.changeCase.pascalCase(name) %>Service implements I<%= h.changeCase.pascalCase(name) %>Service {
  get<%= h.changeCase.pascalCase(name) %> = (): Promise<APIResponse<true>> => {
    return axios({
      url: `/<%= h.changeCase.camelCase(name) %>`,
      method: 'GET',
    })
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  }

  // auto-method
}

export default new <%= h.changeCase.pascalCase(name) %>Service()
