---
to: app/components/<%= h.changeCase.pascalCase(into) %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
<% if(locals.lang == "false"){ -%>
import React, { memo } from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

/**
 * Define component props type
 */
export type <%= h.changeCase.pascalCase(name) %>Props = {
  title: string
}

const <%= h.changeCase.pascalCase(name) %> = ({title}: <%= h.changeCase.pascalCase(name) %>Props) => {
  return (
    <View style={styles.<%= h.changeCase.camelCase(name) %>}>
      <Text style={styles.<%= h.changeCase.camelCase(name) %>Text}>{title}</Text>
    </View>
  )
}

/**
 * Default props
 */
<%= h.changeCase.pascalCase(name) %>.defaultProps = {
  title: '<%= h.changeCase.pascalCase(name) %>Component',
}

export default memo(<%= h.changeCase.pascalCase(name) %>)
<% } else { -%>
import React, { memo } from 'react'
import {View, Text} from 'react-native'
import {withTranslation, WithTranslation} from 'react-i18next'

import styles from './styles'

/**
 * Define component props type
 */
export type <%= h.changeCase.pascalCase(name) %>Props = {
  title: string
}

const <%= h.changeCase.pascalCase(name) %> = ({title}: <%= h.changeCase.pascalCase(name) %>Props & WithTranslation) => {
  return (
    <View style={styles.<%= h.changeCase.camelCase(name) %>}>
      <Text style={styles.<%= h.changeCase.camelCase(name) %>Text}>{title}</Text>
    </View>
  )
}

/**
 * Default props
 */
<%= h.changeCase.pascalCase(name) %>.defaultProps = {
  title: '<%= h.changeCase.pascalCase(name) %>Component',
}

export default memo(withTranslation()(<%= h.changeCase.pascalCase(name) %>))
<% } -%>
