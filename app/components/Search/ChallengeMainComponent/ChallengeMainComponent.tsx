import React, { memo, useState } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Colors, Theme } from '../../../theme'
import ChallengeDateComponent from '../ChallengeDateComponent/ChallengeDateComponent'
import styles from './styles'


/**
 * Define component props type
 */
export type ChallengeMainComponentProps = {
  navigation: any,
  data: {
    _id: number,
    title: string,
    status: boolean,
    description: string,
    score: number,
    images: {
      url: string
    },
    timestamp: any,
    readed: boolean,
  }[],
}

const ChallengeMainComponent = ({ navigation, data, t }: ChallengeMainComponentProps & WithTranslation) => {
  const [loading, setLoading] = useState(false)

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={`challenge${item._id}`}
        onPress={() => {
          navigation.navigate('Noti_Detail', { noti_data: item })
        }}
      >
        <View
          key={`challengeComp${item._id}`}
          style={{ ...styles.ChallengeMainComponent, backgroundColor: item.readed ? Colors.WHITE : Colors.BLUEYGREY }}
        >
          <View style={styles.container}>


            {/* Noti MiniImage */}
            <View style={styles.wrapImage}>

              <View style={styles.imageViewContainer}>
                <Image
                  source={{ uri: item.images.url }}
                  style={styles.imageContainer}
                  resizeMode='cover'
                />
              </View>

              <View style={styles.txtBox}>
                {/* Noti Title */}
                <Text
                  style={styles.notiTitleText}
                  numberOfLines={2}
                  ellipsizeMode='tail'
                >
                  {item.title}

                </Text>

                {/* Noti Description */}
                <Text
                  numberOfLines={2}
                  ellipsizeMode='tail'
                  style={styles.notiDescText}
                >
                  {item.description}
                </Text>

                {/* Noti DateTime */}
                <ChallengeDateComponent dateTime={item.timestamp} />
              </View>



            </View>

          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (loading) return null;
    return (
      <ActivityIndicator size="small" color={Theme.colors.gradient} style={{ height: 50 }} />
    );
  };


  if (data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', height: Dimensions.get('screen').height / 2, alignContent: 'center', alignItems: 'center' }}>
        <Text style={styles.txtNothing}>
          {t('noti:title:nothing')}
        </Text>

      </View>
    )
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListFooterComponent={renderFooter.bind(setLoading)}
      onEndReached={() => { setLoading(true) }}
    />

  )


}

/**
 * Default props
 */
ChallengeMainComponent.defaultProps = {
  title: 'ChallengeMainComponentComponent',
}

export default memo(withTranslation()(ChallengeMainComponent))
