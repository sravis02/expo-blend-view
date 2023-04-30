import { requireNativeViewManager } from 'expo-modules-core'
import * as React from 'react'
import { ViewProps } from 'react-native/types'

export type Props = {
  blendMode:
    | 'normal'
    | 'darken'
    | 'multiply'
    | 'colorBurn'
    | 'lighten'
    | 'screen'
    | 'colorDodge'
    | 'overlay'
    | 'softLight'
    | 'hardLight'
    | 'difference'
    | 'exclusion'
} & ViewProps //ViewProps

const NativeView: React.ComponentType<Props> =
  requireNativeViewManager('ExpoBlendView')

export default function ExpoBlendView(props: Props) {
  return <NativeView {...props} />
}
