import { ExpoBlendView } from 'expo-blend-view'
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'

export default function App() {
  const { width, height } = useWindowDimensions()

  return (
    <View style={{ flex: 1 }}>
      <ExpoBlendView
        blendMode='difference'
        style={{
          width,
          height,
          marginTop: 100,
          position: 'absolute',
          zIndex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>halloo</Text>
        <Image
          source={{
            uri: 'https://i.etsystatic.com/37858744/r/il/038481/4195956226/il_fullxfull.4195956226_iyec.jpg',
          }}
          style={{
            width: width / 2,
            height: height / 2,
            position: 'absolute',
            zIndex: -1,
          }}
        />
      </ExpoBlendView>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        style={{ width, height, position: 'absolute', zIndex: -2 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
