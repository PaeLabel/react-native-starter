/**
 * @format
 */
import 'react-native-gesture-handler'
import './app/config/allowScaleFontSize'
import './app/config/axios'
import {AppRegistry} from 'react-native'
import App from './app/App'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)
