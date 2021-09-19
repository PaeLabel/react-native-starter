---
to: app/components/<%= h.changeCase.pascalCase(into) %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
<% if(locals.lang == "false"){ -%>
import React, { PureComponent } from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

/**
 * Define component props type
 */
export type <%= h.changeCase.pascalCase(name) %>Props = {
  title: string
}

/**
 * Define component state type
 */
type <%= h.changeCase.pascalCase(name) %>State = {}

class <%= h.changeCase.pascalCase(name) %> extends PureComponent<<%= h.changeCase.pascalCase(name) %>Props, <%= h.changeCase.pascalCase(name) %>State> {
  /**
   * Default props
   */
  static defaultProps = {
    title: '<%= h.changeCase.pascalCase(name) %>Component',
  }

  render() {
    const {title} = this.props
    return (
      <View style={styles.<%= h.changeCase.camelCase(name) %>}>
        <Text style={styles.<%= h.changeCase.camelCase(name) %>Text}>{title}</Text>
      </View>
    )
  }
}

export default <%= h.changeCase.pascalCase(name) %>
<% } else { -%>
import React, { PureComponent } from 'react'
import {View, Text} from 'react-native'
import {withTranslation, WithTranslation} from 'react-i18next'

import styles from './styles'

/**
 * Define component props type
 */
export type <%= h.changeCase.pascalCase(name) %>Props = {
  title: string
}

/**
 * Define component state type
 */
type <%= h.changeCase.pascalCase(name) %>State = {}

class <%= h.changeCase.pascalCase(name) %> extends PureComponent<
  <%= h.changeCase.pascalCase(name) %>Props & WithTranslation,
  <%= h.changeCase.pascalCase(name) %>State
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: '<%= h.changeCase.pascalCase(name) %>Component',
  }

  render() {
    const {title} = this.props
    return (
      <View style={styles.<%= h.changeCase.camelCase(name) %>}>
        <Text style={styles.<%= h.changeCase.camelCase(name) %>Text}>{title}</Text>
      </View>
    )
  }
}

export default withTranslation()(<%= h.changeCase.pascalCase(name) %>)
<% } -%>
