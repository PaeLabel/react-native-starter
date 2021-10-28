import Config from 'react-native-config'
import { name as appName } from '../../app.json'

/**
 *  Environment variables
 */
const {
  REACT_APP_ENVIRONMENT,
  REACT_APP_APP_NAME,
  REACT_APP_BUNDLE_ID,
  REACT_APP_API_URL,
  REACT_APP_DEEP_LINK_SCHEME,
} = Config

const envList = [
  { REACT_APP_ENVIRONMENT },
  { REACT_APP_APP_NAME },
  { REACT_APP_BUNDLE_ID },
  { REACT_APP_API_URL },
  { REACT_APP_DEEP_LINK_SCHEME },
]
const checkEnvVariableIsEmpty = (envVar: any) => !!!Object.values(envVar)[0]
const hasSomeVariableEmpty = envList.some(checkEnvVariableIsEmpty)

if (hasSomeVariableEmpty) {
  const variableKeyIsEmptyValue = envList
    .filter(checkEnvVariableIsEmpty)
    .map(Object.keys)
    .join(', ')

  throw new Error(
    `App can not read environment file.\nMissing value of:\n${variableKeyIsEmptyValue}`,
  )
}

/**
 * Expose project configuration
 */
export default {
  // Project Name
  name: appName,
  // bundle Id,
  bundleId: REACT_APP_BUNDLE_ID,
  // App scheme for linking
  scheme: `${REACT_APP_DEEP_LINK_SCHEME}://`,
  // Build ID
  appBuildId: `Rev. A`,
  // env
  env: REACT_APP_ENVIRONMENT,
  // Base url
  baseUrl: REACT_APP_API_URL,
}
