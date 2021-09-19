---
to: app/dtos/<%= h.changeCase.pascalCase(name) %>DTO.ts
---
import {Error} from './Generic'

<% if(locals.stateKey){ -%>
export interface <%= h.changeCase.pascalCase(stateKey) %>DTO {
  // Add field follow be dto hare.
}

export interface <%= h.changeCase.pascalCase(stateKey) %>StateDTO {
  data: <%= h.changeCase.pascalCase(stateKey) %>DTO
  isLoading: boolean
  errors: Error[]
}

export interface <%= h.changeCase.pascalCase(name) %>StateDTO {
  <%= h.changeCase.camelCase(stateKey) %>: <%= h.changeCase.pascalCase(stateKey) %>StateDTO 
}
<% } else { -%>
export interface <%= h.changeCase.pascalCase(name) %>DTO {
  data: {}
  isLoading: boolean
  errors: Error[]
}

export interface <%= h.changeCase.pascalCase(name) %>StateDTO {
  <%= h.changeCase.camelCase(name) %>: <%= h.changeCase.pascalCase(name) %>DTO 
}
<% } -%>
