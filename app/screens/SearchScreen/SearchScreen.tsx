import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import ChallengeMainComponent from '../../components/Search/ChallengeMainComponent/ChallengeMainComponent'
import styles from './styles'


/**
 * Define navigation params
 */
export type SearchScreenParams = {}
export type NavigationType = NavigationStackProp<{}, SearchScreenParams>

/**
 * Define component props type
 */
export type SearchScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type SearchScreenState = {}

class SearchScreen extends PureComponent<
  SearchScreenProps & WithTranslation,
  SearchScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'SearchScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Search', // Set navbar text title
  }

  render() {
    const { title } = this.props

    const data = [{
      _id: 0,
      title: "Test1",
      status: true,
      description: "Description test",
      score: 100,
      images: {
        url: "https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png",
      },
      timestamp: "2020-12-04T03:44:11",
      readed: true,
    },
    {
      _id: 1,
      title: "Test2",
      status: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      score: 100,
      images: {
        url: "https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png",
      },
      timestamp: "2020-12-04T03:44:11",
      readed: true,
    },
    {
      _id: 3,
      title: "Test3",
      status: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      score: 100,
      images: {
        url: "https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png",
      },
      timestamp: "2020-12-04T03:44:11",
      readed: true,
    },
    {
      _id: 4,
      title: "Test4",
      status: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      score: 100,
      images: {
        url: "https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png",
      },
      timestamp: "2020-12-04T03:44:11",
      readed: true,
    }]



    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.searchScreen}>
          <ChallengeMainComponent
            navigation={this.props.navigation}
            data={data}
          />
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

const SearchScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen)
const SearchScreenWithTranslate = withTranslation()(SearchScreenWithRedux)

export default hoistNonReactStatics(
  SearchScreenWithTranslate,
  SearchScreen,
)
