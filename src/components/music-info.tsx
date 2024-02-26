import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Track } from 'react-native-track-player'

type MusicInfoProps = {
    track: Track | null | undefined;
}

export const MusicInfo = ({track}: MusicInfoProps) => {
  return (
    <>
      <View >
        <Text style={[styles.text]} >{track?.title}</Text>
        <Text style={[styles.text]} >{track?.album} | {track?.artist}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  infoContainer: {

  },
  text: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center"
  }
})