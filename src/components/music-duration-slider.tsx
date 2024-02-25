import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player'

export const MusicDurationSlider = () => {
    const { position, duration } = useProgress()
  return (
    <View style={styles.sliderContainer} >
      <Slider 
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor='#B83227'
        maximumTrackTintColor='#B83227'
        style={styles.slider}
      />
      <View style={styles.timeTextContainer} >
        <Text style={styles.timeText}>{new Date(position * 1000).toTimeString().substring(0,5)}</Text>
        <Text style={styles.timeText}>{new Date((duration - position) * 1000).toTimeString().substring(0,5)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: "90%",
        // flex: 1,
        // alignItems: "center",
        marginTop: 10
    },
    slider: {
        // width: 300,
        height: 40,
    },
    timeTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // width: "100%"
    },
    timeText: {
        fontSize: 14,
        color: "#B83227"
    }
})