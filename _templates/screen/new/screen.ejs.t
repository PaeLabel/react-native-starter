---
to: app/screens/<%= h.changeCase.pascalCase(name) %>Screen/<%= h.changeCase.pascalCase(name) %>Screen.tsx
---
import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {withTranslation, WithTranslation} from 'react-i18next'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import hoistNonReactStatics from 'hoist-non-react-statics'
import SafeAreaView from 'react-native-safe-area-view'

import styles from './styles'

/**
 * Define navigation params
 */
export type <%= h.changeCase.pascalCase(name) %>ScreenParams = {}
export type NavigationType = NavigationStackProp<{}, <%= h.changeCase.pascalCase(name) %>ScreenParams>

/**
 * Define component props type
 */
export type <%= h.changeCase.pascalCase(name) %>ScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type <%= h.changeCase.pascalCase(name) %>ScreenState = {}

class <%= h.changeCase.pascalCase(name) %>Screen extends PureComponent<
  <%= h.changeCase.pascalCase(name) %>ScreenProps & WithTranslation,
  <%= h.changeCase.pascalCase(name) %>ScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: '<%= h.changeCase.pascalCase(name) %>Screen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: '<%= h.changeCase.pascalCase(name) %>', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.<%= h.changeCase.camelCase(name) %>Screen}>
          <Text style={styles.<%= h.changeCase.camelCase(name) %>ScreenText}>{title}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

/**
 * Select redux state
 */
const mapStateToProps = (reduxState: any) => ({
  // Selected redux state hare
})

/**
 * Map action creators
 */
const mapDispatchToProps = {
  // Map action creators hare
}

const <%= h.changeCase.pascalCase(name) %>ScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(<%= h.changeCase.pascalCase(name) %>Screen)
const <%= h.changeCase.pascalCase(name) %>ScreenWithTranslate = withTranslation()(<%= h.changeCase.pascalCase(name) %>ScreenWithRedux)

export default hoistNonReactStatics(
  <%= h.changeCase.pascalCase(name) %>ScreenWithTranslate,
  <%= h.changeCase.pascalCase(name) %>Screen,
)
