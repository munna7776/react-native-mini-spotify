import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player';

export const MusicDurationSlider = () => {
  const {position, duration} = useProgress();
  console.log({position,duration})
  return (
    <View style={styles.sliderContainer}>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="#FFF"
        maximumTrackTintColor="#FFF"
        style={{height: 40}}
      />
      <View style={styles.timeTextContainer}>
        <Text style={styles.timeText}>
          {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.timeText}>
          {new Date((duration - position) * 1000)
            .toISOString()
            .substring(15, 19)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: '90%',
    marginTop: 10,
  },
  timeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  timeText: {
    fontSize: 16,
    color: '#FFF',
  },
});
