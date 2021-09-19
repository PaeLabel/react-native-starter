---
inject: true
to: app/navigation/HomeStack.tsx
after: import {createStackNavigator} from 'react-navigation-stack'
skip_if: import <%= h.changeCase.pascalCase(name) %>Screen from '../screens/<%= h.changeCase.pascalCase(name) %>Screen/<%= h.changeCase.pascalCase(name) %>Screen'
---
import <%= h.changeCase.pascalCase(name) %>Screen from '../screens/<%= h.changeCase.pascalCase(name) %>Screen/<%= h.changeCase.pascalCase(name) %>Screen'