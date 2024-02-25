import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Track } from 'react-native-track-player'

type MusicInfoProps = {
    track: Track | null | undefined;
}

export const MusicInfo = ({track}: MusicInfoProps) => {
  return (
    <View>
      <View>
        <Text>{track?.title}</Text>
        <Text>{track?.album} | {track?.artist}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})