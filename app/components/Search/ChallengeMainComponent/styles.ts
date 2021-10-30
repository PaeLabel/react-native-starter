import { StyleSheet } from 'react-native'
import { Colors, Theme } from '../../../theme'

const styles = StyleSheet.create({
  ChallengeMainComponent: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    backgroundColor: Colors.AZURE,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    borderColor: Colors.BLUEYGREY,
    borderWidth: 1,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: Theme.spacing(3),
    marginVertical: Theme.spacing(2),
    // justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: 100,
  },
  ChallengeMainComponentText: {
    ...Theme.text.title,
    textAlign: 'center',
  },
  notiTitleText: {
    ...Theme.text.title,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  notiDescText: {
    ...Theme.text.description,
    textAlign: 'left',

    marginTop: 10,
  },
  wrapDateTime: {
    flexDirection: 'row',
    marginTop: 15,
  },
  notiDateTimeText: {
    ...Theme.text.subDescription,
    textAlign: 'justify',
    marginLeft: 5,
  },
  wrapImage: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto'
  },
  imageViewContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    minWidth: 100,
    minHeight: 80,
  },
  imageContainer: {
    width: 100,
    height: 80,
  },
  txtNothing: {
    ...Theme.text.header1
  },
  noContentContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  noContentText: {
    ...Theme.text.header1,
    textAlign: 'center',
  },
  txtBox: {
    marginLeft: 15,
    width: '70%',
  }

})

export default styles
